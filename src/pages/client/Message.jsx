// import React from 'react'

// const Message = () => {
//   return (
//     <>

//     <section id="departments" className="departments">
//       <div className="container">

//         <div className="section-title">
//           <h2>Ujumbe</h2>
//           <p>ujumbe wetu</p>
//         </div>

//         <div className="row gy-4">
//           <div className="col-lg-3">
//             <ul className="nav nav-tabs flex-column">
//               <li className="nav-item">
//                 <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-9">
//             <div className="tab-content">
//               <div className="tab-pane active show" id="tab-1">
//                 <div className="row gy-4">
//                   <div className="col-lg-12 details order-2 order-lg-1">
//                     <h3>Cardiology</h3>
//                     <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
//                     <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
//                   </div>
                 
//                 </div>
//               </div>
//               <div className="tab-pane" id="tab-2">
//                 <div className="row gy-4">
//                   <div className="col-lg-12 details order-2 order-lg-1">
//                     <h3>Et blanditiis nemo veritatis excepturi</h3>
//                     <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
//                     <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
//                   </div>
                  
//                 </div>
//               </div>
//               <div className="tab-pane" id="tab-3">
//                 <div className="row gy-4">
//                   <div className="col-lg-12 details order-2 order-lg-1">
//                     <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
//                     <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
//                     <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
//                   </div>
                  
//                 </div>
//               </div>
//               <div className="tab-pane" id="tab-4">
//                 <div className="row gy-4">
//                   <div className="col-lg-12 details order-2 order-lg-1">
//                     <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
//                     <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
//                     <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
//                   </div>
                  
//                 </div>
//               </div>
//               <div className="tab-pane" id="tab-5">
//                 <div className="row gy-4">
//                   <div className="col-lg-12 details order-2 order-lg-1">
//                     <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
//                     <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
//                     <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
    
    
    
    
    
    
//     </>
//   )
// }

// export default Message


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Header from './Header';
import FooterComponent from "./FooterComponent";
import Topbar from './Topbar';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // To keep track of the active tab
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Define your API endpoint for fetching messages
    const apiEndpoint = `${API_BASE_URL}/message/upload/`;

    // Make the API call
    axios.get(apiEndpoint)
      .then(response => {
        setMessages(response.data); // Assuming the response contains an array of messages
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Filter messages based on is_active
  const activeMessages = messages.filter(message => message.is_active);

  // Determine the number of messages to display
  const displayMessages = showAll ? activeMessages : activeMessages.slice(0, 4);

  return (
    <>
    <Topbar/>
    <Header/>
     <main id="main" style={{paddingTop:"80px"}}>
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Ujumbe</h2>
            <p>ujumbe wetu wa kila wiki</p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                {/* Populate navigation tabs based on fetched messages */}
                {displayMessages.map((message, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${activeTab === index ? 'active show' : ''}`}
                      data-bs-toggle="tab"
                      href={`#tab-${index + 1}`}
                      onClick={() => setActiveTab(index)}
                    >
                      {message.week}
                      {message.has_badge && (
                        <img
                          src="https://media3.giphy.com/media/RI5iCeTJC69WaHCw7o/200w.webp?cid=ecf05e473uohm5tow2osq7fntknjl05wst28e6lzyuvl9rp9&ep=v1_stickers_search&rid=200w.webp&ct=ts"
                          alt="Badge"
                          style={{ marginLeft: '5px', width: '80px', height: '80px' }}
                        />
                      )}
                    </a>
                  </li>
                ))}
                {activeMessages.length > 4 && (
                  <li className="nav-item">
                    <button className="nav-link" onClick={() => setShowAll(!showAll)}>
                      {showAll ? 'Show Less' : 'Show More'}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="tab-content">
                {/* Populate tab content based on fetched messages */}
                {displayMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`tab-pane ${activeTab === index ? 'active show' : ''}`}
                    id={`tab-${index + 1}`}
                  >
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 style={{ cssFloat: "right", fontSize: "15pt" }}>{message.pub_date}</h3>
                        <p className="fst-italic">ujumbe</p>
                        <p>{message.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <FooterComponent/>
    </>
  );
};

export default Message;

