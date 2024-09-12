import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';

const VideoTable = () => {
  const [avideo, setVideo] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API
    axios.get(`${API_BASE_URL}/video/upload/`) // Replace with your API URL
      .then((response) => {
        setVideo(response.data);
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
                        Video
                    </th>
                    
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {avideo.map((video) => (
                    <tr key={video.id}>
                      <th scope="row" className="fw-bold dtr-control sorting_1">
                        {video.id}
                      </th>
                      
                      <td>
                        <p className="fw-normal"><a href={video.Video} target='_blank'>view video</a></p>
                      </td>
                      
                      <td className="text-center py-0 align-middle">
                        <div className="btn-group btn-group-sm">
                          <NavLink
                            to={`videoform/${video.id}`}>
                              <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#videomodal"
                            style={{ margin: '0 5px' }}
                          >
                            <i className="fas fa-eye"></i>
                            </button>
                          </NavLink>
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

export default VideoTable;
