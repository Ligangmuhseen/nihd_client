import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext';

const MessageForm = () => {
  const csrfToken = useCsrfToken();
  const [formData, setFormData] = useState({
    message: '',
    is_active: true,
    has_badge: false,
    week: '', // Default week number
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/message/upload/`,
        formData,
        {
          headers: {
            'X-CSRFToken': csrfToken,
          },
        }
      );

      if (response.status === 201) {
        alert('Weekly message added successfully.');
        // Additional actions, e.g., closing modal
      } else {
        alert('Failed to add weekly message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Your modal structure here */}
      <div className="modal fade" id="messagemodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Posting a message</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="messageInput">Message</label>
              <textarea
                className="form-control"
                id="messageInput"
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weekNoInput">Week</label>
              <input
                type="text"
                className="form-control"
                id="weekNoInput"
                name="week"
                placeholder="Enter Week Number"
                value={formData.week}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isActiveCheckbox"
                name="is_active"
                checked={formData.is_active}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="isActiveCheckbox">
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="hasBadgeCheckbox"
                name="has_badge"
                checked={formData.has_badge}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="hasBadgeCheckbox">
                Has Badge
              </label>
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
    </div>
  );
};

export default MessageForm;
