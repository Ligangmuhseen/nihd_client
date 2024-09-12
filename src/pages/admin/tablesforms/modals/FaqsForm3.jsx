import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';

import { useCsrfToken } from '../../../../components/CSRFTokenContext'; // Import the hook


const FaqsForm3 = () => {
    const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
    const { id } = useParams();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);

            const response = await axios.delete(`${API_BASE_URL}/faqs/upload/${id}/`,{
                headers: {
                    'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
                },
            });

            if (response.status === 204) {
                // Data was successfully deleted, you can handle it here
                alert('Data deleted successfully.');
                // Close the modal
        

            } else {
                alert('Failed to delete data.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsDeleting(false);
            // Close the modal here if needed
        }
    };

    return (
        <div>
            <div className="modal fade" id="faqsmodal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>Are you sure you want to delete it?</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleDelete}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsForm3;
