import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook
import API_BASE_URL from '../../../../components/apiConfig';






const AbMainForm2 = () => {
    const { id } = useParams();
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const [values, setValues] = useState({
        id: id,
        description: "",
        story: ""
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            axios.get(`${API_BASE_URL}/aboutone/upload/${id}/`)
                .then(res => {
                    setValues({ ...res.data });
                    setIsEditMode(true);
                })
                .catch(err => console.log(err))
        }
    }, [id]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSaveChanges = () => {
        axios.put(`${API_BASE_URL}/aboutone/upload/${id}/`, values, {
            headers: {
                'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
            },
        })
            .then(res => {
                alert("Changes saved successfully!");
            })
            .catch(error => {
                console.error("Error saving changes:", error);
            });
    };

    return (
        <div>
            <div className="modal fade" id="aboutmodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                             
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="Enter About description"
                                        name="description"
                                        value={values.description}
                                        onChange={onInputChange}
                                        disabled={!isEditMode}
                                        style={{ minHeight: '150px', resize: 'vertical' }} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="storyInput">Story</label>
                                    <textarea
                                        className="form-control"
                                        id="storyInput"
                                        rows="3"
                                        placeholder="Enter the story"
                                        name="story"
                                        value={values.story}
                                        onChange={onInputChange}
                                        disabled={!isEditMode}
                                        style={{ minHeight: '150px', resize: 'vertical' }} 
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {isEditMode ? (
                                <button type="button" className="btn btn-primary" onClick={onSaveChanges}>Save changes</button>
                             ) : (
                                <button type="button" className="btn btn-primary" onClick={() => setIsEditMode(true)}>Edit</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbMainForm2;
