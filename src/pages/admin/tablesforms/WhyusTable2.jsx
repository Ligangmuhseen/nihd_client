import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';

const WhyusTable2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the API endpoint URL
       

        // Use Axios to fetch data from the API
        axios.get(`${API_BASE_URL}/whyustwo/upload/`)
            .then(response => {
                setData(response.data); // Update the state with the fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array ensures the effect runs only once on component mount

    return (
        <div>
            <div className="card-body snipcss-tC4sd">
                <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="example1_length">
                                {/* Length control goes here */}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div id="example1_filter" className="dataTables_filter">
                                {/* Search input goes here */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
                                <thead>
                                    <tr>
                                        <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                                            Id
                                        </th>
                                        <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                                            Icon
                                        </th>
                                        <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                                            Title
                                        </th>
                                        <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                                            Description
                                        </th>
                                        <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                <p className="fw-bold">
                                                  <img  style={{width:"50px"}} src={item.icon} alt="" />
                                                    
                                                </p>
                                            </td>
                                            <td>
                                                <p className="fw-normal">
                                                {item.title}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="fw-normal">
                                                {item.description}
                                                </p>
                                            </td>
                                            <td className="text-center py-0 align-middle">
                                                <div className="btn-group btn-group-sm">
                                                    <Link to={`whyusform2/${item.id}`}>
                                                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#whyusmodal2" style={{ margin: "0 5px" }}>
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
            </div>
        </div>
    );
}

export default WhyusTable2;
