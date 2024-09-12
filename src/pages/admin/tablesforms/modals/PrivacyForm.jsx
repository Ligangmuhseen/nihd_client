import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const PrivacyForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const [privacies, setPrivacies] = useState('');

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/privacy/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        setPrivacies(data.privacies);
      })
      .catch((error) => {
        console.error('Error fetching privacy data:', error);
      });
  }, [id]);

  const handleTextareaChange = (e) => {
    setPrivacies(e.target.value);
    e.target.style.height = 'auto'; // Reset the height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set the new height based on the content
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('privacies', privacies);

    axios
      .put(`${API_BASE_URL}/privacy/upload/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
            
        
        },
      })
      .then(() => {
        alert('Privacy updated successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating Privacy:', error);
        alert('Error updating Privacy');
      });
  };

  return (
    <div className="modal fade" id="privacymodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Update Privacy</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="privacyTextarea">Main Heading</label>
                <textarea
                  className="form-control"
                  id="privacyTextarea"
                  placeholder="Enter Main Heading"
                  value={privacies}
                  onChange={handleTextareaChange}
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

export default PrivacyForm;
