import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';


const UserManagementTable = () => {
  const [user, setUser] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);


// Set the Authorization header for Axios requests
const headers = {
  'Content-Type': 'application/json',
};

  useEffect(() => {
    // Fetch data from your API
    axios.get(`${API_BASE_URL}/form/user/upload/`,{headers}) // Replace with your API URL
      .then((response) => {
        setUser(response.data);
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
             <div className="container">
                <div className="row">
                    <div className="col-12" style={{textAlign:"right"}}>
                        <Link to="userform">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usermanagementmodal">
                                Add New
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
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
                      Username
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                      SuperUser
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                      State
                    </th>
                    
                    <th  scope="col" className="sorting text-center" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((users) => (
                    <tr key={users.id}>
                      <th scope="row" className="fw-bold dtr-control sorting_1">
                        {users.id}
                      </th>
                      
                      <td>
                        <p className="fw-normal">{users.username}</p>
                      </td>

                      <td>
                        <p className="fw-normal">{users.is_superuser ? "superuser" : "normal user"}</p>
                      </td>

                      <td>
                        <p className="fw-normal">{users.is_active ? "active" : "not active"}</p>
                      </td>
                      
                      <td className="text-center py-0 align-middle">
                      <div className="btn-group btn-group-sm">
                                       
                                        <Link to={`userform2/${users.id}`}>
                                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#usermanagementmodal2" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-edit"></i>
                                            </button>
                                        </Link>
                                        <Link to={`userform3/${users.id}`}>
                                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#usermanagementmodal3" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-user-times"></i>
                                            </button>
                                        </Link>
                                         {/* <Link to="#">
                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#usermanagementmodal" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-trash"></i>
                                            </button>
                                        </Link> */}
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

export default UserManagementTable;
