// import React from 'react'
// import { Link } from 'react-router-dom'

// const TestimonialTable = () => {
//     return (
//         <div>

//             <div>
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-12 text-right">
//                             {/* <Link to="aboutform" ><button class="btn btn-primary">Add New</button></Link> */}
//                             <Link to="testimonialsform" ><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal">Add New</button></Link>
//                         </div>
//                     </div>
//                 </div>

//                 <div>

//                     <div className="card-body snipcss-tC4sd">
//                         <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
//                             <div className="row">
//                                 <div className="col-sm-12 col-md-6">
//                                     <div className="dataTables_length" id="example1_length">

//                                     </div>
//                                 </div>
//                                 <div className="col-sm-12 col-md-6">
//                                     <div id="example1_filter" className="dataTables_filter">

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-sm-12">
//                                     <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
//                                                     Id
//                                                 </th>
//                                                 <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
//                                                     Image
//                                                 </th>
//                                                 <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
//                                                     Name
//                                                 </th>
//                                                 <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
//                                                     Position
//                                                 </th>
//                                                 <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
//                                                     Words
//                                                 </th>
//                                                 <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
//                                                     Actions
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr className="odd">
//                                                 <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
//                                                     1
//                                                 </th>
//                                                 <td>
//                                                     <p className="fw-bold">
//                                                         image1
//                                                     </p>
//                                                 </td>

//                                                 <td>
//                                                     <p className="fw-normal">
//                                                         triple muhsin
//                                                     </p>
//                                                 </td>
//                                                 <td>
//                                                     <p className="fw-normal">
//                                                         software developer
//                                                     </p>
//                                                 </td>
//                                                 <td>
//                                                     <p className="fw-normal">
//                                                         very interesting in coding
//                                                     </p>
//                                                 </td>
//                                                 <td className="text-center py-0 align-middle">
//                                                     <div className="btn-group btn-group-sm">
//                                                         <a href="testimonialsform" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal" style={{ margin: "0 5px" }}>
//                                                             <i className="fas fa-eye">
//                                                             </i>

//                                                         </a>

//                                                         <Link to="testimonialsform2" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal2" style={{ margin: "0 5px" }}>
//                                                             <i className="fas fa-edit"></i>
//                                                         </Link>

//                                                         <Link to="testimonialsform3" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#testimonialsmodal3" style={{ margin: "0 5px" }}>
//                                                             <i className="fas fa-trash"></i>
//                                                         </Link>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-sm-12 col-md-5">
//                                     <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
//                                         Showing 1 to 3 of 3 entries
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-12 col-md-7">
//                                     <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
//                                         <ul className="pagination">
//                                             <li className="paginate_button page-item previous disabled" id="example1_previous">
//                                                 <a href="#" aria-controls="example1" data-dt-idx="0" tabIndex="0" className="page-link">
//                                                     Previous
//                                                 </a>
//                                             </li>
//                                             <li className="paginate_button page-item active">
//                                                 <a href="#" aria-controls="example1" data-dt-idx="1" tabIndex="0" className="page-link">
//                                                     1
//                                                 </a>
//                                             </li>
//                                             <li className="paginate_button page-item next disabled" id="example1_next">
//                                                 <a href="#" aria-controls="example1" data-dt-idx="2" tabIndex="0" className="page-link">
//                                                     Next
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>









//                 </div>
//             </div>




//         </div>
//     )
// }

// export default TestimonialTable


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const TestimonialTable = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get(`${API_BASE_URL}/testimonials/upload/`)
            .then((response) => {
                setTestimonials(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right">
                        <Link to="testimonialsform">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal">
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
                                Name
                            </th>
                            <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending">
                                Position
                            </th>
                            <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Words: activate to sort column ascending">
                                Words
                            </th>
                            <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Actions: activate to sort column ascending">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((testimonial) => (
                            <tr className="odd" key={testimonial.id}>
                                <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                                    {testimonial.id}
                                </th>
                                <td>
                                <img src={testimonial.image} alt='img1' style={{width:60,height:80}} />
                                   
                                </td>
                                <td>
                                    <p className="fw-normal">{testimonial.name}</p>
                                </td>
                                <td>
                                    <p className="fw-normal">{testimonial.position}</p>
                                </td>
                                <td>
                                    <p className="fw-normal">{testimonial.words}</p>
                                </td>
                                <td className="text-center py-0 align-middle">
                                    <div className="btn-group btn-group-sm">
                                        <Link to="#">
                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-eye"></i>
                                            </button>
                                        </Link>
                                        <Link to={`testimonialsform2/${testimonial.id}`}>
                                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#testimonialsmodal2" style={{ margin: "0 5px" }}>
                                            <i className="fas fa-edit"></i>
                                            </button>
                                        </Link>
                                        <Link to={`testimonialsform3/${testimonial.id}`}>
                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#testimonialsmodal3" style={{ margin: "0 5px" }}>
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

export default TestimonialTable;
