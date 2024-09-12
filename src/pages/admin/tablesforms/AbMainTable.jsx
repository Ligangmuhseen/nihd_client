import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';


const AbMainTable = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from the first API endpoint
    axios.get(`${API_BASE_URL}/abouttwo/upload/`)
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API_ENDPOINT_1:', error);
      });

    // Fetch data from the second API endpoint
    axios.get(`${API_BASE_URL}/health/upload/`)
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API_ENDPOINT_2:', error);
      });
  }, []);

  return (
    <div>
      {/* <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <Link to="aboutform">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aboutmodal">
              Add New for Table 1
            </button>
            </Link>


          </div>
        </div>
      </div>
      <br /> */}

      <div className="card-body snipcss-tC4sd">
        <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Icon</th>
              <th scope="col">Heading</th>
              <th scope="col">Subheading</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>
                  <img style={{ width: "100px" }} src={item.icon} alt="alt photo" />
                </td>
                <td>
                  <p className="fw-normal">{item.heading}</p>
                </td>
                <td>
                  <p className="fw-normal">{item.description}</p>
                </td>
                <td className="text-center py-0 align-middle">
                  <div className="btn-group btn-group-sm">

                    <Link to={`aboutform3/${item.id}`}>
                      <button className="btn btn-secondary" style={{ margin: "0 5px" }} data-bs-toggle="modal" data-bs-target="#aboutmodal3">
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


      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <Link to="healthform">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#healthmodal">
                Add New
              </button>


            </Link>

          </div>
        </div>
      </div>

      <div className="card-body snipcss-tC4sd">
        <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Healthvalues Lists</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((health) => (
              <tr key={health.id}>
                <th>{health.id}</th>
                <td>
                  <p className="fw-bold">{health.item}</p>
                </td>
                <td className="text-center py-0 align-middle">
                  <div className="btn-group btn-group-sm">

                    <Link to={`healthform2/${health.id}`}> <button className="btn btn-secondary" style={{ margin: "0 5px" }} data-bs-toggle="modal" data-bs-target="#healthmodal2">
                      <i className="fas fa-edit"></i>
                      </button>

                    </Link>

                    <Link to={`healthform3/${health.id}`}>
                      <button className="btn btn-danger" style={{ margin: "0 5px" }} data-bs-toggle="modal" data-bs-target="#healthmodal3">
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
  );
};

export default AbMainTable;







































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AbMainForm3 from "./modals/AbMainForm3"
// import HealthForm from "./modals/HealthForm"
// import HealthForm2 from "./modals/HealthForm2"
// import HealthForm3 from "./modals/HealthForm3"

// const AbMainTable = () => {
//   const [data1, setData1] = useState([]);
//   const [data2, setData2] = useState([]);
//   const [addModal2Visible, setAddModal2Visible] = useState(false);
//   const [editModal1Visible, setEditModal1Visible] = useState(false);
//   const [editModal2Visible, setEditModal2Visible] = useState(false);
//   const [deleteModal2Visible, setDeleteModal2Visible] = useState(false);
//   const [selectedItemId, setSelectedItemId] = useState(null);

//   useEffect(() => {
//     // Fetch data from the first API endpoint
//     axios.get('http://localhost:8000/abouttwo/upload/')
//       .then((response) => {
//         setData1(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from API_ENDPOINT_1:', error);
//       });

//     // Fetch data from the second API endpoint
//     axios.get('http://localhost:8000/health/upload/')
//       .then((response) => {
//         setData2(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from API_ENDPOINT_2:', error);
//       });
//   }, []);

//   // Function to handle edit button click
//   const handleEdit1Click = (itemId) => {
//     setSelectedItemId(itemId);
//     setEditModal1Visible(true);
//   };

//   // Function to handle edit button click
//   const handleAdd2Click = () => {
//     setAddModal2Visible(true);
//   };


//   // Function to handle edit button click
//   const handleEdit2Click = (itemId) => {
//     setSelectedItemId(itemId);
//     setEditModal2Visible(true);
//   };



//   // Function to handle delete button click
//   const handleDelete2Click = (itemId) => {
//     setSelectedItemId(itemId);
//     setDeleteModal2Visible(true);
//   };

//   return (
//     <div>
//       <div className="card-body snipcss-tC4sd">
//         <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Icon</th>
//               <th scope="col">Heading</th>
//               <th scope="col">Subheading</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>


//           <tbody>
//             {data1.map((item) => (
//               <tr key={item.id}>
//                 <th>{item.id}</th>
//                 <td>
//                   <img style={{ width: "100px" }} src={item.icon} alt="alt photo" />
//                 </td>
//                 <td>
//                   <p className="fw-normal">{item.heading}</p>
//                 </td>
//                 <td>
//                   <p className="fw-normal">{item.description}</p>
//                 </td>
//                 <td className="text-center py-0 align-middle">
//                   <div className="btn-group btn-group-sm">
//                     {/* Edit button */}
//                     <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#aboutmodal3" style={{ margin: "0 5px" }} onClick={() => handleEdit1Click(item.id)}><i className="fas fa-edit"></i></button>

//                   </div>

//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Render the table for data2 */}

//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-right">

//             <button className="btn btn-primary" onClick={() => handleAdd2Click()}>
//               Add New
//             </button>

//           </div>
//         </div>
//       </div>

//       <div className="card-body snipcss-tC4sd">
//         <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Healthvalues Lists</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data2.map((health) => (
//               <tr key={health.id}>
//                 <th>{health.id}</th>
//                 <td>
//                   <p className="fw-bold">{health.item}</p>
//                 </td>
//                 <td className="text-center py-0 align-middle">
//                   <div className="btn-group btn-group-sm">
//                     {/* Edit button */}
//                     <button className="btn btn-secondary" style={{ margin: "0 5px" }} onClick={() => handleEdit2Click(health.id)}> <i className="fas fa-edit"></i></button>

//                     {/* Delete button */}

//                     <button className="btn btn-danger" style={{ margin: "0 5px" }} onClick={() => handleDelete2Click(health.id)}> <i className="fas fa-trash"></i></button>
//                   </div>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Edit Modal */}
//         {editModal1Visible && (
//           <AbMainForm3
//             itemId={selectedItemId}
//             onClose={() => setEditModal1Visible(false)}
//           />
//         )}

//         {/* Add Modal */}
//         {addModal2Visible && (
//           <HealthForm
//             itemId={selectedItemId}
//             onClose={() => setAddModal2Visible(false)}
//           />
//         )}



//         {/* Edit Modal */}
//         {editModal2Visible && (
//           <HealthForm2
//             itemId={selectedItemId}
//             onClose={() => setEditModal2Visible(false)}
//           />
//         )}

//         {/* Delete Modal */}
//         {deleteModal2Visible && (
//           <HealthForm3
//             itemId={selectedItemId}
//             onClose={() => setDeleteModal2Visible(false)}
//           />
//         )}
//       </div>
//     </div>

//   );
// };

// export default AbMainTable;

