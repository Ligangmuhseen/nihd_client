import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const ServiceForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [image, setImage] = useState(null);
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to your API
    const formData = new FormData();
    formData.append('image', image);
    formData.append('service', service);
    formData.append('description', description);

    try {
      // Send a POST request to your API endpoint
      await axios.post(`${API_BASE_URL}/service/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
         
        },
      });

      // Optionally, handle success, e.g., redirect or show a success message
      alert('Service created successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error creating service:', error);
      // Optionally, handle the error, e.g., display an error message
      alert('Error creating service');
    }
  };

  return (
    <div>
      <div className="modal fade" id="servicemodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create a New Service</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="imageInput">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="imageInput"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceInput">Service</label>
                  <input
                    type="text"
                    className="form-control"
                    id="serviceInput"
                    placeholder="Enter service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descriptionInput">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descriptionInput"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
