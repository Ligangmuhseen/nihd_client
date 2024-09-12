import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const HealthForm2 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  const [formData, setFormData] = useState({
    item: '',
  });

  useEffect(() => {
    // Fetch data by ID and populate the form
    axios.get(`${API_BASE_URL}/health/upload/${id}/`) // Replace with your API endpoint for getting data by ID
      .then((response) => {
        const data = response.data; // Assuming the API response is an object with data fields
        setFormData({
          item: data.item,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios.put(`${API_BASE_URL}/health/upload/${id}/`, formData,{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  }) // Replace with your API endpoint for updating data by ID
      .then((response) => {
        // Handle success, e.g., show a success message or perform other actions.
        alert('Data updated successfully!');
        window.location.reload();
      })
      .catch((error) => {
        // Handle error, e.g., show an error message or perform other error-related actions.
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="healthmodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update an item</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="healthInput">Healthvalue Item</label>
                  <input
                    type="text"
                    className="form-control"
                    id="healthInput"
                    placeholder="Enter health value item"
                    name="item"
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

export default HealthForm2;
