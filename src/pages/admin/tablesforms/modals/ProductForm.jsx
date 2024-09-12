import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const ProductForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [diseases, setDiseases] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to your API
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('diseases', diseases.split(',').map((disease) => disease.trim()));

    try {
      // Send a POST request to your API endpoint
      await axios.post(`${API_BASE_URL}/product/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        
        },
      });

      // Optionally, handle success, e.g., redirect or show a success message
      alert('Product created successfully');
    } catch (error) {
      console.error('Error creating product:', error);
      // Optionally, handle the error, e.g., display an error message
      alert('Error creating product');
    }
  };

  return (
    <>
      <div className="modal fade" id="productmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create a New Product</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="imageInput">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="imageInput"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="headingInput">Title</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="headingInput"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subheadingInput">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="subheadingInput"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="diseasesInput">Diseases</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="diseasesInput"
                    placeholder="Enter diseases (comma-separated)"
                    value={diseases}
                    onChange={(e) => setDiseases(e.target.value)}
                  />
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
    </>
  );
};

export default ProductForm;
