import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const Faqstable = () => {
  // Create a state variable to store the FAQ data
  const [faqData, setFaqData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Make an Axios GET request to fetch your data
    axios.get(`${API_BASE_URL}/faqs/upload/`)
      .then(response => {
        // Set the fetched data to the state variable
        setFaqData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <Link to="faqsform">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#faqsmodal">
                Add New
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="card-body snipcss-tC4sd">
          <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
            {/* Your existing table structure */}
            <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
              <thead>
                <tr>
                  <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                    Id
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                    Questions
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                    Answers
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {faqData.map((faq, index) => (
                  <tr key={index}>
                    <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                      {faq.id}
                    </th>
                    <td>
                      <p className="fw-bold">{faq.question}</p>
                    </td>
                    <td>
                      <p className="fw-normal">{faq.answer}</p>
                    </td>
                    <td className="text-center py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                        <Link to="#"><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#faqsmodal" style={{ margin: "0 5px" }}>
                          <i className="fas fa-eye"></i>
                          </button>
                        </Link>
                        <Link to={`faqsform2/${faq.id}`}> <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#faqsmodal2" style={{ margin: "0 5px" }}>
                   
                          <i className="fas fa-edit"></i>
                          </button>
                        </Link>
                        <Link to={`faqsform3/${faq.id}`}>
                          <button data-bs-toggle="modal" data-bs-target="#faqsmodal3"
                          className="btn btn-danger"

                          style={{ margin: "0 5px" }}
                        >
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
      </div>
    </div>
  );
};

export default Faqstable;
