import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const AbMainForm3 = () => {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const { id } = useParams(); // Assuming you're using the ID from the route params
  const [formData, setFormData] = useState({
    icon: null,
    heading: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the existing data using the ID
    if (id) {
      axios.get(`${API_BASE_URL}/abouttwo/upload/${id}/`)
        .then((response) => {
          const { icon, heading, description } = response.data;
          setFormData({ icon, heading, description });
        })
        .catch((error) => {
          console.error('Error fetching data for update:', error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSaveChanges = () => {
    const data = new FormData();
    data.append('icon', formData.icon);
    data.append('heading', formData.heading);
    data.append('description', formData.description);

    axios.put(`${API_BASE_URL}/abouttwo/upload/${id}/`, data,{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  })
      .then((response) => {
        // Handle success, e.g., show a success message or perform other actions.
        alert('Changes saved successfully!');
      })
      .catch((error) => {
        // Handle error, e.g., show an error message or perform other error-related actions.
        console.error('Error saving changes:', error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="aboutmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="iconInput">Icon</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="iconInput"
                    name="icon"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="headingInput">Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headingInput"
                    name="heading"
                    placeholder="Enter heading"
                    value={formData.heading}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subheadingInput">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subheadingInput"
                    name="description"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbMainForm3;


































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AbMainForm3 = ({ itemId, onClose }) => {
//   const [formData, setFormData] = useState({
//     icon: null,
//     heading: '',
//     description: '',
//   });

//   useEffect(() => {
//     // Fetch the existing data using the itemId
//     if (itemId) {
//       axios.get(`http://localhost:8000/abouttwo/upload/${itemId}/`)
//         .then((response) => {
//           const { icon, heading, description } = response.data;
//           setFormData({ icon, heading, description });
//         })
//         .catch((error) => {
//           console.error('Error fetching data for update:', error);
//         });
//     }
//   }, [itemId]);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSaveChanges = () => {
//     const data = new FormData();
//     data.append('icon', formData.icon);
//     data.append('heading', formData.heading);
//     data.append('description', formData.description);

//     axios.put(`http://localhost:8000/abouttwo/upload/${itemId}/`, data)
//       .then((response) => {
//         // Handle success, e.g., show a success message or perform other actions.
//         alert('Changes saved successfully!');
//         window.location.reload();// Close the modal when changes are saved
//       })
//       .catch((error) => {
//         // Handle error, e.g., show an error message or perform other error-related actions.
//         console.error('Error saving changes:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="modal fade" id="aboutmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" className="close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//             <form encType="multipart/form-data">
//                 <div className="form-group">
//                   <label htmlFor="iconInput">Icon</label>
//                   <input
//                     type="file"
//                     className="form-control-file"
//                     id="iconInput"
//                     name="icon"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="headingInput">Heading</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="headingInput"
//                     name="heading"
//                     placeholder="Enter heading"
//                     value={formData.heading}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="subheadingInput">Description</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="subheadingInput"
//                     name="description"
//                     placeholder="Enter description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary"  onClick={handleSaveChanges}>
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AbMainForm3;

