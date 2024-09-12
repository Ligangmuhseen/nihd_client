import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';

const HeroTable = () => {
  const [heroes, setHeroes] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API
    axios.get(`${API_BASE_URL}/hero/upload/`) // Replace with your API URL
      .then((response) => {
        setHeroes(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="card-body snipcss-tC4sd">
            <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
              {/* Rest of your table structure */}
              <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
                <thead>
                  <tr>
                    <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                      Id
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                      Image
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      MainHeading
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      Subheading
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {heroes.map((hero) => (
                    <tr key={hero.id}>
                      <th scope="row" className="fw-bold dtr-control sorting_1">
                        {hero.id}
                      </th>
                      <td>
                        <img src={hero.image} alt="img" style={{width:"100px",height:"100px"}}/>
                      </td>
                      <td>
                        <p className="fw-normal">{hero.mainheading}</p>
                      </td>
                      <td>
                        <p className="fw-normal">{hero.subheading}</p>
                      </td>
                      <td className="text-center py-0 align-middle">
                        <div className="btn-group btn-group-sm">
                          <Link
                            to={`heroform/${hero.id}`}>
                              <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#heromodal"
                            style={{ margin: '0 5px' }}
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
              {/* Rest of your table structure */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroTable;
