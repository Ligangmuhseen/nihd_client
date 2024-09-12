import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const GalleryTable = () => {
  // Create a state variable to store the gallery data
  const [galleryData, setGalleryData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Make an Axios GET request to fetch your data
    axios
      .get(`${API_BASE_URL}/gallery/upload/`)
      .then((response) => {
        // Set the fetched data to the state variable
        setGalleryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-right">
              <Link to="galleryform">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#gallerymodal"
                >
                  Add New
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-body snipcss-tC4sd">
          <div
            id="example1_wrapper"
            className="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div className="row">
              <div className="col-sm-12">
                <table
                  id="example1"
                  className="table table-bordered table-striped dataTable no-footer dtr-inline"
                  aria-describedby="example1_info"
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="sorting sorting_asc"
                        tabIndex="0"
                        aria-controls="example1"
                        rowSpan="1"
                        colSpan="1"
                        aria-sort="ascending"
                        aria-label="Id: activate to sort column descending"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example1"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Title: activate to sort column ascending"
                      >
                        Images
                      </th>
                      <th
                        scope="col"
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example1"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Action: activate to sort column ascending"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {galleryData.map((gallery, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'even' : 'odd'}
                      >
                        <th
                          scope="row"
                          className="fw-bold dtr-control sorting_1"
                        >
                          {gallery.id}
                        </th>
                        <td>
                          <img src={gallery.images} alt='img1' style={{width:60,height:80}} />
                        </td>
                        <td className="text-center py-0 align-middle">
                          <div className="btn-group btn-group-sm">
                            <Link
                              to="#">
                                <button
                              className="btn btn-primary"
                              style={{ margin: '0 5px' }}
                            >
                              <i className="fas fa-eye"></i>
                              </button>
                            </Link>
                            <Link
                              to={`galleryform2/${gallery.id}`}>
                                <button
                              className="btn btn-secondary"
                              data-bs-toggle="modal"
                              data-bs-target='#gallerymodal2'
                              style={{ margin: '0 5px' }}
                            >
                              <i className="fas fa-edit"></i>
                              </button>
                            </Link>
                            <Link
                              to={`galleryform3/${gallery.id}`}>
                                <button
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target='#gallerymodal3'
                              style={{ margin: '0 5px' }}
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
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="example1_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to {galleryData.length} of {galleryData.length}{' '}
                  entries
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example1_paginate"
                >
                  <ul className="pagination">
                    <li className="paginate_button page-item previous disabled">
                      <a
                        href="#"
                        aria-controls="example1"
                        data-dt-idx="0"
                        tabIndex="0"
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="example1"
                        data-dt-idx="1"
                        tabIndex="0"
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item next disabled">
                      <a
                        href="#"
                        aria-controls="example1"
                        data-dt-idx="2"
                        tabIndex="0"
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTable;
