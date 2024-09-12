import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const GalleryForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  // State variables
  const [selectedImage, setSelectedImage] = useState(null);

  // Arrow function for handling image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Arrow function for handling image upload
  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image');
      return;
    }

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append('images', selectedImage);

    try {
      // Send a POST request using Axios
      const response = await axios.post(`${API_BASE_URL}/gallery/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
            
        
        },
        onUploadProgress: (progressEvent) => {
          // Log upload progress
          console.log((progressEvent.loaded / progressEvent.total) * 100 + '%');
        },
      });

      // Handle the response
      if (response.status === 201) {
        // Image uploaded successfully
        alert('Image uploaded successfully');
        // Close the modal or perform any other actions as needed
        // You can add code here to close the modal or reset the form
      } else {
        // Handle other status codes if needed
        alert('Error uploading image');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Axios Error:', error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="gallerymodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="imageInput">Image</label>
                  <input type="file"  accept="image/png, image/jpeg" className="form-control-file" id="imageInput" onChange={handleImageChange} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={handleImageUpload}>Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
