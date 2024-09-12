import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook

const UserManagementForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('password', formData.password);
    formDataToSend.append('username', formData.username);
  
    try {
      const response = await axios.post(`${API_BASE_URL}/form/user/upload/`, formDataToSend, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        alert('User added successfully.');
        // Additional actions here...
      } else {
        // Handle validation errors
        if (response.data && response.data.errors[0]) {
          // Update the state with validation errors
          setErrors(response.data.errors[0]);
         
        } else {
          alert('Failed to add User.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <div className="modal fade" id="usermanagementmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
  <label htmlFor="usernameInput">Username</label>
  <input
    type="text"
    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
    id="usernameInput"
    name="username"
    placeholder="Enter username"
    onChange={handleInputChange}
  />
  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
</div>

<div className="form-group">
  <label htmlFor="passwordInput">Password</label>
  <input
    type="text"
    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
    id="passwordInput"
    name="password"
    placeholder="Enter password"
    onChange={handleInputChange}
  />
  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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

export default UserManagementForm;
