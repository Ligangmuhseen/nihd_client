import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const HeroForm = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [mainheading, setMainHeading] = useState('');
  const [subheading, setSubheading] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE_URL}/hero/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        setMainHeading(data.mainheading);
        setSubheading(data.subheading);
      })
      .catch((error) => {
        console.error('Error fetching hero data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('mainheading', mainheading);
    formData.append('subheading', subheading);

    axios.put(`${API_BASE_URL}/hero/upload/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      
      },
    })
      .then(() => {
        alert('Hero updated successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating hero:', error);
        alert('Error updating hero');
      });
  };

  return (
    <>
      <div className="modal fade" id="heromodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Hero</h5>
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
                  <label htmlFor="headingInput">Main Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headingInput"
                    placeholder="Enter Main Heading"
                    value={mainheading}
                    onChange={(e) => setMainHeading(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subheadingInput">Subheading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subheadingInput"
                    placeholder="Enter Subheading"
                    value={subheading}
                    onChange={(e) => setSubheading(e.target.value)}
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

export default HeroForm;
