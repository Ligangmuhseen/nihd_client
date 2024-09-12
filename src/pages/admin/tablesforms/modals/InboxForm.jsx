import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../../../../components/apiConfig";
import { useState, useEffect } from "react";

const InboxForm = () => {
  // const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const [date_of_birth, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [health_status_description, setHealthstatusdescription] = useState("");
  const [has_disease, setHasdisease] = useState(false);
  const [disease_name, setDiseasename] = useState("");
  const [medication_used, setMedicationused] = useState("");
  const [treatment_facility, setTreatmentfacility] = useState("");
  const [has_allergy, setHasallergy] = useState(false);
  const [allergy_description, setAllergydescription] = useState("");
  const [family_health_conditions, setFamilyhealthconditions] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/societyform3/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        setDOB(data.date_of_birth);
        setGender(data.gender);
        setOccupation(data.occupation);
        setCountry(data.country);
        setRegion(data.region);
        setDistrict(data.district);
        setWard(data.ward);
        setNeighborhood(data.neighborhood);
        setHealthstatusdescription(data.health_status_description);
        setHasdisease(data.has_disease);
        setDiseasename(data.disease_name);
        setMedicationused(data.medication_used);
        setTreatmentfacility(data.treatment_facility);
        setHasallergy(data.has_allergy);
        setAllergydescription(data.allergy_description);
        setFamilyhealthconditions(data.family_health_conditions);

      })
      .catch((error) => {
        console.error("Error fetching formdata:", error);
      });
  }, [id]);

  const mystyleqn = {
    color:"black"

  }

  const mystyleans = {
    color:"green"
  }

  return (
    <div>
      <div
        className="modal fade"
        id="inboxmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
       
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-md"
          role="document"
        >
          <div className="modal-content" >
            <div className="modal-header" style={{backgroundColor:"#866ec7"}}>
              <p className="modal-title" id="exampleModalLabel" style={{color:"white"}}>
                Message Content for user {id}
              </p>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body"  style={{backgroundColor:"#abc3e7"}}>
              <div>
                <label style={mystyleqn}>Date of birth</label>
                <h6 style={mystyleans}>{date_of_birth}</h6>
              </div>
              <div>
                <label style={mystyleqn}>Gender</label>
                <h6 style={mystyleans}>{gender}</h6>
              </div>
              <div>
                <label style={mystyleqn}>occupation</label>
                <h6 style={mystyleans}>{occupation}</h6>
              </div>
              <div>
                <label style={mystyleqn}>country</label>
                <h6 style={mystyleans}>{country}</h6>
              </div>
              <div>
                <label style={mystyleqn}>Region</label>
                <h6 style={mystyleans}>{region}</h6>
              </div>
              <div>
                <label style={mystyleqn}>ward</label>
                <h6 style={mystyleans}>{ward}</h6>
              </div>

              <div>
                <label style={mystyleqn}>district</label>
                <h6 style={mystyleans}>{district}</h6>
              </div>
              <div>
                <label style={mystyleqn}>neighborhood</label>
                <h6 style={mystyleans}>{neighborhood}</h6>
              </div>
              <div>
                <label style={mystyleqn}>health_status_description</label>
                <h6 style={mystyleans}>{health_status_description}</h6>
              </div>

              <div>
                <label style={mystyleqn}>has_disease</label>
                <h6 style={mystyleans}>{has_disease ? "ndio" : "hapana"}</h6>
              </div>
              <div>
                <label style={mystyleqn}>disease_name</label>
                <h6 style={mystyleans}>{disease_name}</h6>
              </div>
              <div>
                <label style={mystyleqn}>medication_used</label>
                <h6 style={mystyleans}>{medication_used}</h6>
              </div>
              <div>
                <label style={mystyleqn}>treatment_facility</label>
                <h6 style={mystyleans}>{treatment_facility}</h6>
              </div>
              <div>
                <label style={mystyleqn}>has_allergy</label>
                <h6 style={mystyleans}>{has_allergy ? "ndio" : "hapana"}</h6>
              </div>
              <div>
                <label style={mystyleqn}>allergy_description</label>
                <h6 style={mystyleans}>{allergy_description}</h6>
              </div>
              <div>
                <label style={mystyleqn}>family_health_conditions</label>
                <h6 style={mystyleans}>{family_health_conditions}</h6>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxForm;
