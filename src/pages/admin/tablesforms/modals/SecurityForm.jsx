import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const SecurityForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const [securities, setSecurities] = useState('');

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/security/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        setSecurities(data.securities);
      })
      .catch((error) => {
        console.error('Error fetching securities data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('securities', securities);

    axios
      .put(`${API_BASE_URL}/security/upload/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
          
        },
      })
      .then(() => {
        alert('Security updated successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating Security:', error);
        alert('Error updating Security');
      });
  };

  return (
    <div className="modal fade" id="securitymodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Update Security</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="securityTextarea">Security</label>
                <textarea
                  className="form-control"
                  id="securityTextarea"
                  placeholder="Enter Security Details"
                  value={securities}
                  onChange={(e) => setSecurities(e.target.value)}
                  style={{ minHeight: '190px', resize: 'vertical' }} 
                ></textarea>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityForm;
