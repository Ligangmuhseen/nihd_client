import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const GalleryForm2 = () => {
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const { id } = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        // Update state with the selected file
        setSelectedFile(event.target.files[0]);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('images', selectedFile);

        try {
            // Make an API request to update the image
            await axios.put(`${API_BASE_URL}/gallery/upload/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
    
                },
            });

            // Handle success
            setSuccessMessage('Image updated successfully');
            setErrorMessage(''); // Clear any previous error message

            // Close the modal or handle success as needed
            // You can add a function to close the modal here
        } catch (error) {
            // Handle errors
            console.error('Error updating image:', error);

            // Set an error message
            setErrorMessage('Failed to update image');
            setSuccessMessage(''); // Clear any previous success message
        }
    };

    return (
        <div>
            {/* Your modal content */}
            <div className="modal fade" id="gallerymodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Image</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Display success message */}
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}

                            {/* Display error message */}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="imageInput">New Image</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="imageInput"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryForm2;
