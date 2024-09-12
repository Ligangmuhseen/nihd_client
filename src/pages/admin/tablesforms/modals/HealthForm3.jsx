import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const HealthForm3 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const handleDelete = () => {
    axios.delete(`${API_BASE_URL}/health/upload/${id}/`,{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  }) // Replace with your API endpoint for deleting
      .then((response) => {
        // Handle success, e.g., show a success message or perform other actions.
        alert('Data deleted successfully!');
        window.location.reload();
      })
      .catch((error) => {
        // Handle error, e.g., show an error message or perform other error-related actions.
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="healthmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Are you sure you want to delete it?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleDelete}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthForm3;
