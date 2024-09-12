import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../../../components/apiConfig';
import { useCsrfToken } from '../../../../components/CSRFTokenContext';

const MessageForm2 = () => {
    const csrfToken = useCsrfToken();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        message: '',
        is_active: true,
        has_badge: false,
        week: '', // Default week number as text
    });

    useEffect(() => {
        // Fetch existing WeeklyMessage data by ID when the component mounts
        axios.get(`${API_BASE_URL}/message/upload/${id}/`)
            .then((response) => {
                const { message, is_active, has_badge, week } = response.data;
                setFormData({ message, is_active, has_badge, week }); // Convert week_no to string
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${API_BASE_URL}/message/upload/${id}/`, formData, {
                headers: {
                    'X-CSRFToken': csrfToken,
                },
            });

            if (response.status === 200) {
                alert('Weekly message updated successfully.');
                // Additional actions, e.g., closing modal or redirecting
            } else {
                alert('Failed to update weekly message.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {/* Your modal structure here */}
            <div className="modal fade" id="messagemodal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update message section</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="messageInput">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="messageInput"
                                        name="message"
                                        placeholder="Enter Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="weekNoInput">Week Name Detail</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="weekNoInput"
                                        name="week"
                                        placeholder="Enter Week Name detail"
                                        value={formData.week}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="isActiveCheckbox"
                                        name="is_active"
                                        checked={formData.is_active}
                                        onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                    />
                                    <label className="form-check-label" htmlFor="isActiveCheckbox">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="hasBadgeCheckbox"
                                        name="has_badge"
                                        checked={formData.has_badge}
                                        onChange={(e) => setFormData({ ...formData, has_badge: e.target.checked })}
                                    />
                                    <label className="form-check-label" htmlFor="hasBadgeCheckbox">
                                        Has Badge
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageForm2;
