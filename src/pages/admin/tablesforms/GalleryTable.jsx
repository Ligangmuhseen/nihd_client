import React from 'react'
import { Link } from 'react-router-dom'

const GalleryTable = () => {
  return (
    <div>

<div>
<div class="container">
        <div class="row">
          <div class="col-12 text-right">
         
            <Link to="galleryform" ><button class="btn btn-primary" data-toggle="modal" data-target="#gallerymodal">Add New</button></Link> 
            

            
          </div>
        </div>
      </div>

<div>

<div className="card-body snipcss-tC4sd">
  <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="dataTables_length" id="example1_length">

        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div id="example1_filter" className="dataTables_filter">

        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col" className="sorting sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                Id
              </th>
              <th scope="col" className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">
                Images
              </th>
              <th scope="col" className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <th scope="row" className="fw-bold dtr-control sorting_1" tabindex="0">
                1
              </th>
              <td>
                <p className="fw-bold">
                  image 1
                </p>
              </td>

              <td className="text-center py-0 align-middle">
                <div className="btn-group btn-group-sm">
                  <Link to="#" className="btn btn-primary" style={{ margin: "0 5px" }}>
                    <i className="fas fa-eye">
                    </i>

                  </Link>

                  <Link to= "galleryform2" className="btn btn-secondary" data-toggle="modal" data-target="#gallerymodal2" style={{ margin: "0 5px" }}>
                    <i className="fas fa-edit"></i>
                  </Link>

                  <Link to="galleryform3" className="btn btn-danger" data-toggle="modal" data-target="#gallerymodal3" style={{ margin: "0 5px" }}>
                    <i className="fas fa-trash"></i>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
              <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" className="page-link">
                Previous
              </a>
            </li>
            <li className="paginate_button page-item active">
              <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" className="page-link">
                1
              </a>
            </li>
            <li className="paginate_button page-item next disabled" id="example1_next">
              <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" className="page-link">
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
    






    </div>
  )
}

export default GalleryTable