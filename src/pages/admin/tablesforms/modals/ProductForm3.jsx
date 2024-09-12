import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const ProductForm3 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams();
  

  const handleDelete = () => {
    // Make a DELETE request to your API endpoint with the productId
    axios.delete(`${API_BASE_URL}/product/upload/${id}/`,{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  })
      .then(() => {
        alert('Product deleted successfully');
        window.location.reload();
         // Redirect to the home page or another appropriate route
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      });
  };

  return (
    <>
      <div className="modal fade" id="productmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Product</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Are you sure you want to delete this product?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm3;
