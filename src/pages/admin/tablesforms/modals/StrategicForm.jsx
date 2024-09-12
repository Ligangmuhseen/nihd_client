import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook

const StrategicForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  // Fetch the existing data based on the ID
  useEffect(() => {
    // Make an API request to get the existing data
    axios.get(`${API_BASE_URL}/strategicone/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        // Update the form fields with the existing data
        setImage(data.image);
        setHeading(data.heading);
        setDescription(data.description);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to your API
    const formData = new FormData();
    formData.append('image', image);
    formData.append('heading', heading);
    formData.append('description', description);

    try {
      // Send a PUT request to your API endpoint with the ID as a parameter
      await axios.put(`${API_BASE_URL}/strategicone/upload/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
         
        },
      });

      // Optionally, handle success, e.g., redirect or show a success message
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      // Optionally, handle the error, e.g., display an error message
      alert('Error updating data');
    }
  };

  return (
    <div>
      <div className="modal fade" id="strategicmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Strategic section</h5>
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
                  <label htmlFor="headingInput">Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headingInput"
                    placeholder="Enter heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descriptionInput">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descriptionInput"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
    </div>
  );
};

export default StrategicForm;
