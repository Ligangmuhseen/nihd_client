import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const WhyusForm2 = () => {
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const { id } = useParams();
    const [icon, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`${API_BASE_URL}/whyustwo/upload/${id}/`)
            .then((response) => {
                const { data } = response;
                setTitle(data.title);
                setDescription(data.description);
                // You can add additional fields if needed

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('icon', icon);
        formData.append('title', title);
        formData.append('description', description);

        axios.put(`${API_BASE_URL}/whyustwo/upload/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
                   
            },
        })
            .then(() => {
                alert('Data updated successfully');
            })
            .catch((error) => {
                console.error('Error updating data:', error);
                alert('Error updating data');
            });
    };

    return (
        <>
            <div className="modal fade" id="whyusmodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
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
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="titleInput">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titleInput"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
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
                                {/* Add other form fields here */}
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

export default WhyusForm2;
