import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const Testimonials2Form = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    words: '',
    image: null,
  });

  useEffect(() => {
    // Fetch existing testimonial data by ID when the component mounts
    axios.get(`${API_BASE_URL}/testimonials/upload/${id}/`)
      .then((response) => {
        const { name, position, words, image } = response.data;
        setFormData({ name, position, words, image });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleUpdate = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('words', formData.words);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.put(`${API_BASE_URL}/testimonials/upload/${id}/`, formDataToSend,{
        headers: {
            'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
    });

      if (response.status === 200) {
        // Testimonial was successfully updated
        alert('Testimonial updated successfully.');
        // You can perform additional actions here, such as closing the modal or redirecting
      } else {
        alert('Failed to update testimonial.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="testimonialsmodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Testimonial</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="imageInput">Image</label>
                  <input type="file" className="form-control-file" id="imageInput" name="image" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input type="text" className="form-control" id="nameInput" name="name" placeholder="Enter Name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="positionInput">Position</label>
                  <input type="text" className="form-control" id="positionInput" name="position" placeholder="Enter Position" value={formData.position} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="wordsInput">Words</label>
                  <input type="text" className="form-control" id="wordsInput" name="words" placeholder="Enter Words" value={formData.words} onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials2Form;
