// SocietyForm.js
import React, { useState, useContext  } from "react";
import axios from "axios"; // Import Axios
import Topbar from "./Topbar";
import Header from "./Header";
import FooterComponent from "./FooterComponent";
import API_BASE_URL from "../../components/apiConfig";
import { useCsrfToken } from '../../components/CSRFTokenContext'; // Import the hook





const SocietyForm = () => {

  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [formData, setFormData] = useState({
    date_of_birth: "",
    gender: "",
    occupation: "",
    country: "",
    region: "",
    district: "",
    ward: "",
    neighborhood: "",
    health_status_description: "",
    has_disease: false,
    disease_name: "",
    medication_used: "",
    treatment_facility: "",
    has_allergy: false,
    allergy_description: "",
    family_health_conditions: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the validation error for the field when it's changed
    setValidationErrors({
      ...validationErrors,
      [e.target.name]: undefined,
    });
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    // Add your date validation logic here if needed

    setFormData({
      ...formData,
      date_of_birth: inputDate,
    });

    // Clear validation error when the user selects a date
    setValidationErrors({
      ...validationErrors,
      date_of_birth: "",
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value === "ndio",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    // Your form validation logic goes here
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/societyform3/upload/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json", // Set the correct content type
              'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
            },
          }
        );

        if (response.status === 201) {
          console.log("Data submitted successfully");
          setFormSubmitted(true);
        
         
        
        
          // Handle success (e.g., show a success message)
        } else {
          console.error("Error submitting data:", response.data);
          // Handle errors (e.g., display validation errors)
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        // Handle other errors
      }
    } else {
      // Form is invalid, update state with errors
      setValidationErrors(errors);
    }
  };

 // Validation logic for your form
const validateForm = (data) => {
  const errors = {};

  // Example validation for the date_of_birth field
  if (!data.date_of_birth) {
    errors.date_of_birth = "Tafadhali ingiza tarehe yako ya kuzaliwa";
    
  }

  // Example validation for the gender field
  if (!data.gender) {
    errors.gender = "Tafadhali chagua jinsia yako";
  
  }

  // Example validation for the occupation field
  if (!data.occupation) {
    errors.occupation = "Tafadhali ingiza shughuli/kazi yako";
  }

  // Example validation for the country field
  if (!data.country) {
    errors.country = "Tafadhali ingiza nchi yako";
  }

  // Example validation for the region field
  if (!data.region) {
    errors.region = "Tafadhali ingiza mkoa lako";
  }

  // Example validation for the district field
  if (!data.district) {
    errors.district = "Tafadhali ingiza wilaya yako";
    
  }

  // Example validation for the ward field
  if (!data.ward) {
    errors.ward = "Tafadhali ingiza kata yako";
  }

  // Example validation for the neighborhood field
  if (!data.neighborhood) {
    errors.neighborhood = "Tafadhali ingiza kitongoji chako";
  }

  // Example validation for the health_status_description field
  if (!data.health_status_description) {
    errors.health_status_description =
      "Tafadhali toa maelezo kuhusu hali yako ya afya";
  }

  // Example validation for the disease-related fields when has_disease is true
  if (data.has_disease) {
    if (!data.disease_name) {
      errors.disease_name = "Tafadhali ingiza jina la ugonjwa";
    }
    if (!data.medication_used) {
      errors.medication_used = "Tafadhali ingiza dawa unayotumia";
    }
    if (!data.treatment_facility) {
      errors.treatment_facility = "Tafadhali chagua kituo cha matibabu";
    }
  }

  // Example validation for the allergy-related field when has_allergy is true
  if (data.has_allergy) {
    if (!data.allergy_description) {
      errors.allergy_description =
        "Tafadhali toa maelezo kuhusu allegi yako";
    }
  }

  // Example validation for the family_health_conditions field
  if (!data.family_health_conditions) {
    errors.family_health_conditions =
      "Tafadhali toa taarifa kuhusu hali ya afya ya familia yako";
  }

  return errors;
};


  return (
    <>
      <Topbar />
      <Header />
     

      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="appointment" class="appointment section-bg">
          <div class="container">
            <div class="section-title">
              <h2>Ukusanyaji wa taarifa za afya katika jamii</h2>
              <p>
                Mahojiano ya hali ya afya.Tafadhari tunakuomba shiriki kutupa
                hali yako ya kiafya ili tuweze kuifikia jamii
              </p>
              <p>Tafadhali jaza fomu iliyokuwepo hapo chini</p>
          
             
            </div>

            {formSubmitted ? (
              <div className="sent-message" style={{textAlign:"center"}}>
            Ujumbe wako umetumwa. Asante!
              </div>
            ) : (
              <form role="form" class="php-email-form" onSubmit={handleSubmit}>
                <div class="row">
                  <div className="col-md-4 form-group">
                    <label className="text-dark" htmlFor="date_of_birth">
                      Tarehe ya Kuzaliwa
                    </label>
                    <input
                      type="date"
                      name="date_of_birth"
                      className={`form-control datepicker ${
                        validationErrors.date_of_birth ? "is-invalid" : ""
                      }`}
                      id="date_of_birth"
                      placeholder="tarehe ya kuzaliwa"
                      value={formData.date_of_birth}
                      onChange={handleDateChange}
                    />
                    {validationErrors.date_of_birth && (
                      <div className="invalid-feedback">
                        {validationErrors.date_of_birth}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <label htmlFor="gender">Jinsia</label>
                    <select
                      name="gender"
                      id="gender"
                      className={`form-select ${
                        validationErrors.gender ? "is-invalid" : ""
                      }`}
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Chagua Jinsia</option>
                      <option value="Me">Me</option>
                      <option value="ke">Ke</option>
                    </select>
                    {validationErrors.gender && (
                      <div className="invalid-feedback">
                        {validationErrors.gender}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <label htmlFor="occupation">Kazi</label>
                    <input
                      type="text"
                      name="occupation"
                      className={`form-control ${
                        validationErrors.occupation ? "is-invalid" : ""
                      }`}
                      id="occupation"
                      placeholder="Kazi"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                    {validationErrors.occupation && (
                      <div className="invalid-feedback">
                        {validationErrors.occupation}
                      </div>
                    )}
                  </div>
                </div>
                <div class="row">
                  <div className="col-md-4 form-group mt-3">
                    <label htmlFor="country">Nchi</label>
                    <input
                      type="text"
                      name="country"
                      className={`form-control ${
                        validationErrors.country ? "is-invalid" : ""
                      }`}
                      id="country"
                      placeholder="Nchi"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {validationErrors.country && (
                      <div className="invalid-feedback">
                        {validationErrors.country}
                      </div>
                    )}
                  </div>

                  <div className="col-md-4 form-group mt-3">
                    <label htmlFor="region">Mkoa</label>
                    <input
                      type="text"
                      name="region"
                      className={`form-control ${
                        validationErrors.region ? "is-invalid" : ""
                      }`}
                      id="region"
                      placeholder="Mkoa"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.region}
                      onChange={handleChange}
                    />
                    {validationErrors.region && (
                      <div className="invalid-feedback">
                        {validationErrors.region}
                      </div>
                    )}
                  </div>

                  <div className="col-md-4 form-group mt-3">
                    <label htmlFor="district">Wilaya</label>
                    <input
                      type="text"
                      name="district"
                      className={`form-control ${
                        validationErrors.district ? "is-invalid" : ""
                      }`}
                      id="district"
                      placeholder="Wilaya"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.district}
                      onChange={handleChange}
                    />
                    {validationErrors.district && (
                      <div className="invalid-feedback">
                        {validationErrors.district}
                      </div>
                    )}
                  </div>

                  <div className="col-md-4 form-group mt-3">
                    <label htmlFor="ward">Kata</label>
                    <input
                      type="text"
                      name="ward"
                      className={`form-control ${
                        validationErrors.ward ? "is-invalid" : ""
                      }`}
                      id="ward"
                      placeholder="Kata"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.ward}
                      onChange={handleChange}
                    />
                    {validationErrors.ward && (
                      <div className="invalid-feedback">
                        {validationErrors.ward}
                      </div>
                    )}
                  </div>

                  <div className="col-md-4 form-group mt-3">
                    <label htmlFor="neighborhood">Kitongoji</label>
                    <input
                      type="text"
                      name="neighborhood"
                      className={`form-control ${
                        validationErrors.neighborhood ? "is-invalid" : ""
                      }`}
                      id="neighborhood"
                      placeholder="Kitongoji"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={formData.neighborhood}
                      onChange={handleChange}
                    />
                    {validationErrors.neighborhood && (
                      <div className="invalid-feedback">
                        {validationErrors.neighborhood}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label>
                    Hali yako ya afya kwa sasa(jielezee) kwa maandishi au sauti
                  </label>
                  <textarea
                    style={{ maxHeight: "90px" }}
                    className={`form-control ${
                      validationErrors.health_status_description
                        ? "is-invalid"
                        : ""
                    }`}
                    name="health_status_description"
                    rows="5"
                    placeholder="Eleza hali yako ya afya"
                    onChange={handleChange}
                    value={formData.health_status_description}
                  ></textarea>
                  {validationErrors.health_status_description && (
                    <div className="invalid-feedback">
                      {validationErrors.health_status_description}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: "center" }}>
                  <p>Je umetambulika kuwa na Ugonjwa?</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="diseaseYes"
                      name="has_disease"
                      value="ndio"
                      style={{ height: "11px" }}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="diseaseYes">
                      Ndio
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="diseaseNo"
                      name="has_disease"
                      value="hapana"
                      style={{ height: "11px" }}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="diseaseNo">
                      Hapana
                    </label>
                  </div>
                </div>

                {formData.has_disease ? (
                  <div class="row">
                    <div className="col-md-4 form-group">
                      <label>Taja Ugonjwa</label>
                      <input
                        type="text"
                        name="disease_name"
                        className={`form-control ${
                          validationErrors.disease_name ? "is-invalid" : ""
                        }`}
                        id="disease_name"
                        placeholder="Ugonjwa"
                        onChange={handleChange}
                        value={formData.disease_name}
                      />
                      {validationErrors.disease_name && (
                        <div className="invalid-feedback">
                          {validationErrors.disease_name}
                        </div>
                      )}
                    </div>
                    <div class="col-md-4 form-group">
                      <label>Dawa unazotumia</label>
                      <input
                        type="text"
                        name="medication_used"
                        className={`form-control ${
                          validationErrors.medication_used ? "is-invalid" : ""
                        }`}
                        id="medication_used"
                        placeholder="dawa"
                        onChange={handleChange}
                        value={formData.medication_used}
                      />
                      {validationErrors.medication_used && (
                        <div className="invalid-feedback">
                          {validationErrors.medication_used}
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 form-group">
                      <label>Yametolewa katika?</label>
                      <select
                        name="treatment_facility"
                        id="treatment_facility"
                        className={`form-select ${
                          validationErrors.treatment_facility
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={handleChange}
                        value={formData.treatment_facility}
                      >
                        <option value="">chagua</option>
                        <option value="Kliniki ya tiba mbadala">
                          Kliniki ya tiba mbadala
                        </option>
                        <option value="Zahanati">Zahanati</option>
                        <option value="Kituo cha Afya">Kituo cha Afya</option>
                        <option value="Hospitali">Hospitali</option>
                        <option value="Duka la dawa">Duka la dawa</option>
                      </select>
                      <div className="invalid-feedback">
                        {validationErrors.treatment_facility}
                      </div>
                    </div>
                  </div>
                ) : null}

                <div style={{ textAlign: "center" }}>
                  <p>Je unasumbuliwa na allergy ya aina yoyote?</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="allergyyes"
                      name="has_allergy"
                      value="ndio"
                      style={{ height: "11px" }}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="allergyyes">
                      Ndio
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="allergyno"
                      name="has_allergy"
                      value="hapana"
                      style={{ height: "11px" }}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="allergyno">
                      Hapana
                    </label>
                  </div>
                </div>

                {formData.has_allergy ? (
                  <div className="form-group">
                    <textarea
                      className={`form-control ${
                        validationErrors.allergy_description ? "is-invalid" : ""
                      }`}
                      name="allergy_description"
                      rows="5"
                      placeholder="taja allegi"
                      onChange={handleChange}
                      value={formData.allergy_description}
                    ></textarea>
                    <div className="invalid-feedback">
                      {validationErrors.allergy_description}
                    </div>
                  </div>
                ) : null}

                <div style={{ textAlign: "center" }}>
                  <p>
                    Ni Ugonjwa gani au hali gani katika familia yenu inawapata
                    mara kwa mara?
                  </p>
                </div>
                <div className="form-group">
                  <textarea
                    className={`form-control ${
                      validationErrors.family_health_conditions
                        ? "is-invalid"
                        : ""
                    }`}
                    name="family_health_conditions"
                    rows="5"
                    placeholder="Taja au jieleze"
                    onChange={handleChange}
                    value={formData.family_health_conditions}
                  ></textarea>
                  <div className="invalid-feedback">
                    {validationErrors.family_health_conditions}
                  </div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                </div>
                <div class="text-center">
                  <button type="submit">Tuma taarifa</button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
};

export default SocietyForm;

// import React from 'react'
// import Topbar from './Topbar'
// import Header from './Header'
// import FooterComponent from './FooterComponent'

// const SocietyForm = () => {
//   return (
//     <>
//       <Topbar />
//       <Header />
//       <main id="main" style={{ paddingTop: "80px" }}>
//         <section id="appointment" class="appointment section-bg">
//           <div class="container">

//             <div class="section-title">
//               <h2>Ukusanyaji wa taarifa za afya katika jamii</h2>
//               <p>Mahojiano ya hali ya afya.Tafadhari tunakuomba shiriki kutupa hali yako ya kiafya ili tuweze kuifikia jamii</p>
//               <p>Tafadhali jaza fomu iliyokuwepo hapo chini</p>
//             </div>

//             <form role="form" class="php-email-form">
//               <div class="row">
//                 <div class="col-md-4 form-group">
//                   <input type="datetime" name="date" class="form-control datepicker" id="date" placeholder="tarehe ya kuzaliwa" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group">
//                   <select name="department" id="department" class="form-select">
//                     <option value="">Jinsia</option>
//                     <option value="Me">Me</option>
//                     <option value="ke">Ke</option>

//                   </select>
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group mt-3 mt-md-0">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Kazi" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-md-4 form-group mt-3">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Nchi" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group mt-3">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Mkoa" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group mt-3">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Wilaya" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group mt-3 mt-md-0">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Kata" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group mt-3 mt-md-0">
//                   <input type="text" name="name" class="form-control" id="name" placeholder="Kitongoji" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//               </div>

//               <div class="form-group mt-3">
//                 <label>Hali yako ya afya kwa sasa(jielezee) kwa maandishi au sauti</label>
//                 <textarea style={{ maxHeight: "90px" }} class="form-control" name="message" rows="5" placeholder=""></textarea>
//                 <div class="validate"></div>
//               </div>

//               <div style={{ textAlign: "center" }}>
//                 <p>Je umetambulika kuwa na Ugonjwa?</p>
//                 <div className="form-check form-check-inline">
//                   <input className="form-check-input" type="radio" id="diseaseYes" name="hasDisease" value="ndio" style={{height:"11px"}} />
//                   <label className="form-check-label" htmlFor="diseaseYes">Ndio</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input className="form-check-input" type="radio" id="diseaseNo" name="hasDisease" value="hapana" style={{height:"11px"}}/>
//                   <label className="form-check-label" htmlFor="diseaseNo">Hapana</label>
//                 </div>
//               </div>

//               <div class="row">
//                 <div class="col-md-4 form-group">
//                   <label>Taja Ugonjwa</label>
//                   <input type="text" name="name" class="form-control" id="name" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group">
//                   <label>Dawa unazotumia</label>
//                   <input type="text" name="name" class="form-control" id="name" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div class="validate"></div>
//                 </div>
//                 <div class="col-md-4 form-group">
//                   <label>Yametolewa katika?</label>
//                   <select name="department" id="department" class="form-select">
//                     <option value="">chagua</option>
//                     <option value="Kliniki ya tiba mbadala">Kliniki ya tiba mbadala</option>
//                     <option value="Zahanati">Zahanati</option>
//                     <option value="Kituo cha Afya">Kituo cha Afya</option>
//                     <option value="Hospitali">Hospitali</option>
//                     <option value="Duka la dawa">Duka la dawa</option>

//                   </select>
//                   <div class="validate"></div>
//                 </div>

//               </div>

//               <div style={{ textAlign: "center" }}>
//                 <p>Je unasumbuliwa na allergy ya aina yoyote?</p>
//                 <div className="form-check form-check-inline">
//                   <input className="form-check-input" type="radio" id="allergyyes" name="hasAllergy" value="ndio" style={{height:"11px"}}/>
//                   <label className="form-check-label" htmlFor="allergyyes">Ndio</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input className="form-check-input" type="radio" id="allergyno" name="hasAllergy" value="hapana" style={{height:"11px"}} />
//                   <label className="form-check-label" htmlFor="allergyno">Hapana</label>
//                 </div>

//               </div>
//               <div class="form-group">
//                 <textarea class="form-control" name="message" rows="5" placeholder="Taja"></textarea>
//                 <div class="validate"></div>
//               </div>

//               <div style={{ textAlign: "center" }}>
//                 <p>Ni Ugonjwa gani au hali gani katika familia yenu inawapata mara kwa mara?</p>

//               </div>
//               <div class="form-group">
//                 <textarea class="form-control" name="message" rows="5" placeholder="Taja au jieleze"></textarea>
//                 <div class="validate"></div>
//               </div>
//               <div class="mb-3">
//                 <div class="loading">Loading</div>
//                 <div class="error-message"></div>
//                 <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
//               </div>
//               <div class="text-center"><button type="submit">Tuma taarifa</button></div>
//             </form>

//           </div>
//         </section>
//       </main>

//       <FooterComponent />
//     </>
//   )
// }

// export default SocietyForm
