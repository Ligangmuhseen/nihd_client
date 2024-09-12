import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';

const StrategicTable = () => {
  // Step 2: Create a state variable to store the data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Step 3: Use the useEffect hook to make the API request
    axios.get(`${API_BASE_URL}/strategicone/upload/`)
      .then((response) => {
        // Step 4: Update the state variable with the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that the API call is made only once when the component mounts

  return (
    <div>
      <h3>NIHD Therapeutics</h3>
      <div className="container">
        <div className="card-body snipcss-tC4sd">
          <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
            <thead>
              <tr>
                <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                  Id
                </th>
                <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending">
                  Image
                </th>
                <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                  Heading
                </th>
                <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                  Description
                </th>
                <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Step 5: Map over the data and render it in the table */}
              {data.map((item) => (
                <tr className="odd" key={item.id}>
                  <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                    {item.id}
                  </th>
                  <td>
                    <img src={item.image} alt="Image" />
                  </td>
                  <td>
                    <p className="fw-normal">{item.heading}</p>
                  </td>
                  <td>
                    <p className="fw-normal">{item.description}</p>
                  </td>
                  <td className="text-center py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <Link to={`strategicform/${item.id}`}>
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#strategicmodal" style={{ margin: "0 5px" }}>
                          <i className="fas fa-edit"></i>
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
  );
};

export default StrategicTable;
