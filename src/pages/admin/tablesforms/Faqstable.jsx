import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Faqstable = () => {
  // Create a state variable to store the FAQ data
  const [faqData, setFaqData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Make an Axios GET request to fetch your data
    axios.get('http://localhost:8000/faqs/upload/')
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
              <button className="btn btn-primary" data-toggle="modal" data-target="#faqsmodal">
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
                  <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                    Id
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">
                    Questions
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Content: activate to sort column ascending">
                    Answers
                  </th>
                  <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">
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
                        <Link to={`/faq/${faq.id}`} className="btn btn-primary" style={{ margin: "0 5px" }}>
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link to={`/faq/${faq.id}/edit`} className="btn btn-secondary" style={{ margin: "0 5px" }}>
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(faq.id)}
                          style={{ margin: "0 5px" }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
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