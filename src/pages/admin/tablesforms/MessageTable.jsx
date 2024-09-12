import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';

const MessageTable = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${API_BASE_URL}/message/upload/`) // Replace 'your-api-endpoint' with the actual endpoint
      .then(response => {
        // Set the retrieved messages to the state
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <Link to="messageform">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#messagemodal">
                Add New
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card-body snipcss-tC4sd">
        <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                Id
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending">
                Week
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                Message
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                Date
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                State
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                Badge
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
              <tr key={message.id} className="odd">
                <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                  {message.id}
                </th>
                <td>
                  <p className="fw-normal">{message.week}</p>
                </td>
                <td>
                  <p className="fw-normal">{message.message}</p>
                </td>
                <td>
                  <p className="fw-normal">{message.pub_date}</p>
                </td>
                <td>
                  <p className="fw-normal">{message.is_active ? 'Active' : 'Inactive'}</p>
                </td>
                <td>
                  <p className="fw-normal">{message.has_badge ? 'Yes' : 'No'}</p>
                </td>
                <td className="text-center py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    {/* <Link to="#">
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" style={{ margin: "0 5px" }}>
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link> */}
                    <Link to={`messageform2/${message.id}`}>
                      <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#messagemodal2" style={{ margin: "0 5px" }}>
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                    <Link to={`messageform3/${message.id}`}>
                      <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#messagemodal3" style={{ margin: "0 5px" }}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageTable;
