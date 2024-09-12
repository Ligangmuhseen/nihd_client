import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../../../../components/apiConfig";
import { useCsrfToken } from "../../../../components/CSRFTokenContext"; // Import the hook

const ProductForm2 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/product/upload/${id}/`)
      .then((response) => {
        const { data } = response;
        setTitle(data.title);
        setDescription(data.description);
  
        if (Array.isArray(data.diseases)) {
          setDiseases(data.diseases);
        } else if (data.diseases) {
          // Handle the case where data.diseases is not an array
          setDiseases([data.diseases]); // Convert to an array
        } else {
          setDiseases([]); // Set it to an empty array if not present
        }
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }

    formData.append('title', title);
    formData.append('description', description);
    formData.append('diseases', diseases.join(', ')); // Join only for API update
  
    axios.put(`${API_BASE_URL}/product/upload/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': csrfToken,
      },
    })
      .then(() => {
        alert('Product updated successfully');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        alert('Error updating product');
      });
  
    // If the API request is successful, update the state with the original array
    setDiseases(diseases);
  };
  
  return (
    <>
      <div
        className="modal fade"
        id="productmodal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Product
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
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
                  <input
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
                    placeholder="Enter diseases separated by comma"
                    value={diseases.join(", ")}
                    onChange={(e) =>
                      setDiseases(
                        e.target.value
                          .split(",")
                          .map((disease) => disease.trim())
                      )
                    }
                  />
                </div>
                {/* Add other form fields here */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm2;
