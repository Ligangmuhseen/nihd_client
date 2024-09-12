import axios from 'axios';
import React, { useState } from 'react';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const HealthForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [formData, setFormData] = useState({
    item: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios.post(`${API_BASE_URL}/health/upload/`, formData, {
      headers: {
        'Content-Type': 'application/json',  
        'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        
      },
    })
      .then((response) => {
        // Handle success
        alert('Data added successfully!');
        window.location.reload();
   
        // Clear the form after successful submission
        setFormData({
          item: '',
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding data:', error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="healthmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create a New Product</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="item">Healthvalue item</label>
                  <input
                    type="text"
                    className="form-control"
                    id="item"
                    name="item"
                    placeholder="Enter health value item"
                    value={formData.item}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthForm;
