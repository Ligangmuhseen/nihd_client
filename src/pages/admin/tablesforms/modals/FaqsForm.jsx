import axios from 'axios';
import React, { useState } from 'react';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const FaqsForm = () => {
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        axios.post(`${API_BASE_URL}/faqs/upload/`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
                    
                
            },
        })
        
        .then((response) => {
            // Handle success
            alert('New entry added successfully!');
            console.log('New entry added successfully!', response.data);
            // Clear the form after successful submission
            setFormData({
                question: '',
                answer: '',
            });
        })
        .catch((error) => {
            // Handle error
            console.error('Error adding new entry:', error);
        });
    };

    return (
        <div>
            <div className="modal fade" id="faqsmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        value={formData.question}
                                        onChange={handleInputChange}
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
                                        value={formData.answer}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsForm;
