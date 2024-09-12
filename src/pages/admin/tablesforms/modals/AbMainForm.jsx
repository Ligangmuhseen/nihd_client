import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const AbMainForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [formData, setFormData] = useState({
    icon: null,
    heading: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSaveChanges = () => {
    const data = new FormData();
    data.append('icon', formData.icon);
    data.append('heading', formData.heading);
    data.append('description', formData.description);

    axios.post(`${API_BASE_URL}/abouttwo/upload`, data,{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  })
      .then((response) => {
        // Handle success, e.g., show a success message or perform other actions.
        alert('Data added successfully!');
      })
      .catch((error) => {
        // Handle error, e.g., show an error message or perform other error-related actions.
        console.error('Error adding data:', error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="aboutmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="iconInput">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="iconInput"
                    name="icon"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="headingInput">Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headingInput"
                    name="heading"
                    placeholder="Enter heading"
                    value={formData.heading}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subheadingInput">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subheadingInput"
                    name="description"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbMainForm;
