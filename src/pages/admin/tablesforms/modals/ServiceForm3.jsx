import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const ServiceForm3 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      // Send a DELETE request to your API endpoint with the serviceId as a parameter
      await axios.delete(`${API_BASE_URL}/service/upload/${id}/`,{
        headers: {
            'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
    });

      // Optionally, handle success, e.g., redirect or show a success message
      alert('Service deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting service:', error);
      // Optionally, handle the error, e.g., display an error message
      alert('Error deleting service');
    }
  };

  return (
    <div>
      <div className="modal fade" id="servicemodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Service</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Are you sure you want to delete this service?</h4>
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

export default ServiceForm3;
