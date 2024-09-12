import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const SliderTable = () => {
    const [heroslider, setHerosliders] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get(`${API_BASE_URL}/heroslider/upload/`)
            .then((response) => {
                setHerosliders(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{textAlign:"right"}}>
                        <Link to="herosliderform">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#heroslidermodal">
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
                                Image
                            </th>
                            <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                                Description
                            </th>
                           
                            <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Actions: activate to sort column ascending">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {heroslider.map((herosliders) => (
                            <tr className="odd" key={herosliders.id}>
                                <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                                    {herosliders.id}
                                </th>
                                <td>
                                <img src={herosliders.image} alt='img1' style={{width:100,height:100}} />
                                   
                                </td>
                                <td>
                                    <p className="fw-normal">{herosliders.description}</p>
                                </td>
                                
                               
                                <td className="text-center py-0 align-middle">
                                    <div className="btn-group btn-group-sm">
                                        <Link to="#">
                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#heroslidermodal" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-eye"></i>
                                            </button>
                                        </Link>
                                        <Link to={`herosliderform2/${herosliders.id}`}>
                                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#heroslidermodal2" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-edit"></i>
                                            </button>
                                        </Link>
                                        <Link to={`herosliderform3/${herosliders.id}`}>
                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#heroslidermodal3" style={{ margin: "0 5px" }}>
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
            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                        Showing 1 to 3 of 3 entries
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="example1_previous">
                                                <a href="#" aria-controls="example1" data-dt-idx="0" tabIndex="0" className="page-link">
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="example1" data-dt-idx="1" tabIndex="0" className="page-link">
                                                    1
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item next disabled" id="example1_next">
                                                <a href="#" aria-controls="example1" data-dt-idx="2" tabIndex="0" className="page-link">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default SliderTable;
