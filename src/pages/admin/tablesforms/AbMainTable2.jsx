import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const AbMainTable2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    axios.get(`${API_BASE_URL}/aboutone/upload/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="card-body snipcss-tC4sd">
        {/* Your table structure */}
        <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col" className="sorting sorting_asc">
                Id
              </th>
              <th scope="col" className="sorting">
                AboutDescription
              </th>
              <th scope="col" className="sorting">
                Story
              </th>
              <th scope="col" className="sorting">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row" className="fw-bold dtr-control sorting_1">
                  {item.id}
                </th>
                <td>
                  <p className="fw-normal">{item.description}</p>
                </td>
                <td>
                  <p className="fw-normal">{item.story}</p>
                </td>
                <td className="text-center py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    <Link
                      to={`aboutform2/${item.id}`}>
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#aboutmodal2"
                      >
                        <i className="fas fa-eye"></i>
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

export default AbMainTable2;
