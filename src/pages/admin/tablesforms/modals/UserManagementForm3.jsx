import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext';

const UserManagementForm3 = () => {
  const csrfToken = useCsrfToken();
  const { id } = useParams();
  const [isActivating, setIsActivating] = useState(false);
  const [is_active, setIsActive] = useState(false);

  const toggleActivation = () => {
    setIsActive(!is_active);
  };

  const activateUser = async () => {
    try {
      setIsActivating(true);

      const response = await axios.patch(
        `${API_BASE_URL}/form/user/upload/${id}/`,
        { is_active },
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // User status updated successfully, handle it here
        alert(`User ${is_active ? 'activated' : 'deactivated'} successfully.`);
        // Optionally, update the UI or fetch updated user data
      } else {
        alert(`Failed to ${is_active ? 'activate' : 'deactivate'} user.`);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsActivating(false);
      // Close the modal here if needed
    }
  };

  return (
    <div>
      <div className="modal fade" id="usermanagementmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {is_active ? 'active' : 'not active'} Confirmation
              </h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>
                Are you sure you want to make this user {is_active ? 'active' : 'not active'} ?
              </h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className={is_active ? 'btn btn-danger' : 'btn btn-success'}
                onClick={activateUser}
                disabled={isActivating}
              >
                {isActivating ? 'Processing...' : is_active ? 'active' : 'not active'}
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={toggleActivation}
                disabled={isActivating}
              >
                Toggle Activation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementForm3;
