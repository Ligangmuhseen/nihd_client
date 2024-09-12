import axios from "axios";
import React, { useState } from "react";
import { useCsrfToken } from "./../../components/CSRFTokenContext"; // Import the hook
import API_BASE_URL from "./../../components/apiConfig";
import whatsapp from "../../UserAssets/img/whatsapp.svg";

import Header from "./Header";
import FooterComponent from "./FooterComponent";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Contact = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the validation error for the field when it's changed
    setValidationErrors({
      ...validationErrors,
      [e.target.name]: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/form/api/submit-form/`,
          formData,
          {
            headers: {
              "X-CSRFToken": csrfToken, // Include the CSRF token in the request headers
            },
          }
        );
        console.log("Form submission successful", response.data);
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error submitting form", error);
        // Optionally, show an error message to the user
      }
    } else {
      // Form is invalid, update state with errors
      setValidationErrors(errors);
    }
  };

  // Validation logic for your form
  const validateForm = (data) => {
    const errors = {};

    // Example validation for the name field
    if (!data.name) {
      errors.name = "Samahani andika jina lako";
    }

    // Example validation for the email field
    if (!data.email) {
      errors.email = "Samahani andika barua pepe yako";
    }

    // Example validation for the subject field
    if (!data.subject) {
      errors.subject = "Samahani andika mada yako";
    }

    // Example validation for the message field
    if (!data.message) {
      errors.message = "Samahani andika ujumbe wako";
    }

    return errors;
  };

  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Mawasiliano</h2>
              <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                Kwa kututumia ujumbe tafadhali jaza fomu hapo chini, Tutakujibu
                kwa haraka iwezekanavyo Tutafuatulizia taarifa zako ipasavyo
                kulingana na sheria zinazosimamia taarifa binafsi. Kwa maelezo
                zaidi unaweza ukasoma kwenye{" "}
                <Link to="/privacy">
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    sheria za taarifa binafsi.
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Tunapatikana</h4>
                    <p>Dar es salaam,Tanzania</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Barua pepe:</h4>
                    <p>info@nihd.co.tz</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Wasiliana nasi:</h4>
                    <p>+255624066387</p>
                    <p>+255782660707</p>
                  </div>
                  <div className="phone">
                    <a href="https://api.whatsapp.com/send?phone=255 782 660 707&amp;text=Hello!" class="floating" target="_blank" >
                      <i>
                        <img src={whatsapp} alt="whatsapp icon" />
                      </i>
                      <h4>Whatsapp</h4>
                      <p>+255782660707</p>
                    </a>
             
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                {formSubmitted ? (
                  <div className="sent-message">
                    Ujumbe wako umetumwa. Asante!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className={`form-control ${
                            validationErrors.name ? "is-invalid" : ""
                          }`}
                          id="name"
                          placeholder="Jina Lako Kamili"
                          onChange={handleInputChange}
                        />
                        {validationErrors.name && (
                          <div className="invalid-feedback">
                            {validationErrors.name}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          className={`form-control ${
                            validationErrors.email ? "is-invalid" : ""
                          }`}
                          name="email"
                          id="email"
                          placeholder="Barua pepe yako"
                          onChange={handleInputChange}
                        />
                        {validationErrors.email && (
                          <div className="invalid-feedback">
                            {validationErrors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className={`form-control ${
                          validationErrors.subject ? "is-invalid" : ""
                        }`}
                        name="subject"
                        id="subject"
                        placeholder="Mada"
                        onChange={handleInputChange}
                      />

                      {validationErrors.subject && (
                        <div className="invalid-feedback">
                          {validationErrors.subject}
                        </div>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className={`form-control ${
                          validationErrors.message ? "is-invalid" : ""
                        }`}
                        name="message"
                        rows="5"
                        placeholder="weka Ujumbe Wako "
                        onChange={handleInputChange}
                      ></textarea>
                      {validationErrors.message && (
                        <div className="invalid-feedback">
                          {validationErrors.message}
                        </div>
                      )}
                    </div>
                    <div className="my-3">
                      <div className="loading">ina pakia</div>
                      <div className="error-message"></div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Tuma Ujumbe</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default Contact;

{
  /* <div>
                    <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                </div> */
}
