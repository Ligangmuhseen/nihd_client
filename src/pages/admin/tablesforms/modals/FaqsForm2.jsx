import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const FaqsForm2 = () => {
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        question: "",
        answer: ""
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            axios.get(`${API_BASE_URL}/faqs/upload/${id}/`)
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
        axios.put(`${API_BASE_URL}/faqs/upload/${id}/`, values,{
            headers: {
                'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
            },
        }) // Replace with your API endpoint for updating
            .then(res => {
                // Handle success, e.g., show a success message or perform other actions.
                alert("Changes saved successfully!");
                
            })
            .catch(error => {
                // Handle error, e.g., show an error message or perform other error-related actions.
                console.error("Error saving changes:", error);
            });
    };

    return (
        <div>
            <div className="modal fade" id="faqsmodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label htmlFor="headingInput">Question</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="headingInput"
                                        placeholder="Enter a question"
                                        name="question"
                                        value={values.question}
                                        onChange={onInputChange}
                                        disabled={!isEditMode}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subheadingInput">Answer</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="subheadingInput"
                                        placeholder="Enter an answer"
                                        name="answer"
                                        value={values.answer}
                                        onChange={onInputChange}
                                        disabled={!isEditMode}
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

export default FaqsForm2;
