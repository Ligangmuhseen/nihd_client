import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const SliderForm2 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  const [formData, setFormData] = useState({
    description: '',
    image: null,
  });

  useEffect(() => {
    // Fetch existing testimonial data by ID when the component mounts
    axios.get(`${API_BASE_URL}/heroslider/upload/${id}/`)
      .then((response) => {
        const { description, image } = response.data;
        setFormData({ description, image });
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
    formDataToSend.append('description', formData.description);


    try {
      const response = await axios.put(`${API_BASE_URL}/heroslider/upload/${id}/`, formDataToSend,{
        headers: {
            'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
    });

      if (response.status === 200) {
        // Testimonial was successfully updated
        alert('slider updated successfully.');
        // You can perform additional actions here, such as closing the modal or redirecting
      } else {
        alert('Failed to update slider');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="heroslidermodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Slider</h5>
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
                  <label htmlFor="descriptionInput">Name</label>
                  <input type="text" className="form-control" id="descriptionInput" name="description" placeholder="Enter Description" value={formData.description} onChange={handleInputChange} />
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

export default SliderForm2;
