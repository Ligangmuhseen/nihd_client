// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import API_BASE_URL from '../../../components/apiConfig';

// const InboxTable = () => {
//   const [messages, setMessages] = useState([]);
//   const [totalEntries, setTotalEntries] = useState(0);
//   const [entriesRange, setEntriesRange] = useState({ start: 0, end: 0 });


//   useEffect(() => {
//     // Fetch data from the API
//     axios.get(`${API_BASE_URL}/societyform3/upload/`) // Replace 'your-api-endpoint' with the actual endpoint
//       .then(response => {
//         // Set the retrieved messages to the state
//         setMessages(response.data);
//         setTotalEntries(response.data.length); // Assuming response.data is an array
//         setEntriesRange({ start: 1, end: response.data.length });
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // The empty dependency array ensures the effect runs once when the component mounts

//   return (
//     <div>
      

//       <div className="card-body snipcss-tC4sd">
//         <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
//           <thead>
//             <tr>
//               <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
//                 Id
//               </th>
//               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending">
//                 DatefBirth
//               </th>
             
//               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
//                 Date message posted
//               </th>
//               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
//                 State
//               </th>
            
//               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {messages.map(message => (
//               <tr key={message.id} className="odd">
//                 <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
//                   {message.id}
//                 </th>
//                 <td>
//                   <p className="fw-normal">{message.date_of_birth}</p>
//                 </td>
                
//                 <td>
//                   <p className="fw-normal">{message.pub_date}</p>
//                 </td>
//                 <td>
//                   <p className="fw-normal">{message.is_active ? 'Active' : 'Inactive'}</p>
//                 </td>
               
//                 <td className="text-center py-0 align-middle">
//                   <div className="btn-group btn-group-sm">
//                     <Link to={`inboxform/${message.id}`}>
//                       <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inboxmodal" style={{ margin: "0 5px" }}>
//                         <i className="fas fa-eye"></i>
//                       </button>
//                     </Link>
                 
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="row">
//                                 <div className="col-sm-12 col-md-5">
//                                     <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
//                                     Showing {entriesRange.start} to {entriesRange.end} of {totalEntries} entries
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
//             </div>
//     </div>
//   );
// };

// export default InboxTable;


























import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../components/apiConfig';
import { useCsrfToken } from '../../../components/CSRFTokenContext';

const ITEMS_PER_PAGE = 10;

const InboxTable = () => {
  const {id} = useParams();
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${API_BASE_URL}/societyform3/upload/`)
      .then(response => {
        // Set the retrieved messages and calculate total pages
        setMessages(response.data);
        setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once when the component mounts


  useEffect(() => {
    // Fetch the message details
    axios.get(`${API_BASE_URL}/societyform3/upload/${id}/`)
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching message details:', error));
  }, [id]);

  

  const markAsRead = () => {
    // Make a request to mark the message as read
    axios.patch(`${API_BASE_URL}/societyform3/upload/${id}/`, { is_read: true },{
      headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
      },
  })
      .then(response => {
        setMessage(response.data); // Update the local state with the updated message
        // Optionally, update the count in the parent component or re-fetch the count
      })
      .catch(error => console.error('Error marking message as read:', error));
    
  };


  


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;
  const displayedMessages = messages.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="card-body snipcss-tC4sd">
        <table id="example1" className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
          <thead>
            <tr>
              <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                Id
              </th>
              <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending">
                DatefBirth
              </th>
             
               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                 Date message posted
               </th>
               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                 State
               </th>
            
               <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">
                 Actions
               </th>
             </tr>
           </thead>
           <tbody>
             {messages.map(message => (
               <tr key={message.id} className="odd">
                 <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                   {message.id}
                 </th>
                 <td>
                   <p className="fw-normal">{message.date_of_birth}</p>
                 </td>
                
                 <td>
                  <p className="fw-normal">{message.pub_date}</p>
                 </td>
                 <td>
                   <p className="fw-normal">{message.is_read ? 'Read' : 'Unread'}</p>
                 </td>
               
                 <td className="text-center py-0 align-middle">
                   <div className="btn-group btn-group-sm">
                     <Link to={`inboxform/${message.id}`}>
                       <button className="btn btn-primary" onClick={markAsRead} data-bs-toggle="modal" data-bs-target="#inboxmodal" style={{ margin: "0 5px" }}>
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
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
            Showing {startIndex + 1} to {Math.min(endIndex, messages.length)} of {messages.length} entries
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
            <ul className="pagination">
              <li className={`paginate_button page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="page-link"
                  tabIndex="0"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`paginate_button page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className="page-link"
                    tabIndex="0"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`paginate_button page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="page-link"
                  tabIndex="0"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxTable;
