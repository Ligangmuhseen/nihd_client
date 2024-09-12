import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const TestimonialsForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    words: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('words', formData.words);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post(`${API_BASE_URL}/testimonials/upload/`, formDataToSend,{
        headers: {
            'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
    });

      if (response.status === 201) {
        // Testimonial entry was successfully added
        alert('Testimonial added successfully.');
        // You can perform additional actions here, such as closing the modal
      } else {
        alert('Failed to add testimonial.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="testimonialsmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Testimonial</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="imageInput">Image</label>
                  <input type="file" className="form-control-file" id="imageInput" name="image" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input type="text" className="form-control" id="nameInput" name="name" placeholder="Enter Name" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="positionInput">Position</label>
                  <input type="text" className="form-control" id="positionInput" name="position" placeholder="Enter Position" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="wordsInput">Words</label>
                  <input type="text" className="form-control" id="wordsInput" name="words" placeholder="Enter Words" onChange={handleInputChange} />
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

export default TestimonialsForm;
