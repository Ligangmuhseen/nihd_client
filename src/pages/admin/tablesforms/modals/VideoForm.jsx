import axios from 'axios';
import React, { useState } from 'react';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook

const VideoForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook

  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Video', videoFile);

    axios
      .put(`${API_BASE_URL}/video/upload/1/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
      })
      .then(() => {
        alert('Video uploaded successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
        alert('Error uploading video');
      });
  };

  return (
    <div className="modal fade" id="videomodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Update a company video</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="videoFileInput">Upload Video</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="videoFileInput"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
