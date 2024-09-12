// import React from 'react'


// const Faqs = () => {
//   return (
//     <>

//       <section id="faq" className="faq section-bg">
//         <div className="container">

//           <div className="section-title">
//             <h2>Frequently Asked Questions</h2>
//             <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//           </div>

//           <div className="faq-list">
//             <ul>
//               <li data-aos="fade-up">
//                 <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
//                 <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
//                   <p>
//                     Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
//                   </p>
//                 </div>
//               </li>

//               <li data-aos="fade-up" data-aos-delay="100">
//                 <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
//                 <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
//                   <p>
//                     Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
//                   </p>
//                 </div>
//               </li>

//               <li data-aos="fade-up" data-aos-delay="200">
//                 <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
//                 <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
//                   <p>
//                     Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
//                   </p>
//                 </div>
//               </li>

//               <li data-aos="fade-up" data-aos-delay="300">
//                 <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
//                 <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
//                   <p>
//                     Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
//                   </p>
//                 </div>
//               </li>

//               <li data-aos="fade-up" data-aos-delay="400">
//                 <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
//                 <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
//                   <p>
//                     Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
//                   </p>
//                 </div>
//               </li>

//             </ul>
//           </div>

//         </div>
//       </section>


//     </>
//   );
// }

// export default Faqs

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../../components/apiConfig';
import Header from './Header';
import FooterComponent from "./FooterComponent";
import Topbar from './Topbar';


const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch FAQs data
    axios.get(`${API_BASE_URL}/faqs/upload/`) // Replace with your actual API endpoint
      .then((response) => {
        setFaqs(response.data); // Update the state with the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching FAQs:', error);
        setLoading(false); // Set loading to false even on error
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Maswali yanayoulizwa mara kwa mara</h2>
            <p  style={{ textAlign: "justify", textJustify: "inter-word" }}>Ili kukusaidia kuelewa kazi na falsafa yetu, tumekusanya orodha ya maswali yanayoulizwa mara kwa mara. Jisikie huru kuchunguza Maswali Yanayoulizwa Mara kwa Mara ili kupata maarifa zaidi kuhusu NIHD, maono ya mwanzilishi wetu, na mfumo tangulizi wa PHV katika dawa. Jua ni nini kinachotutofautisha na jinsi unavyoweza kuwasiliana nasi.</p>
          </div>
          {loading ? (
            <p>Loading FAQs...</p>
          ) : (
            <div className="faq-list">
              <ul>
                {faqs.map((faq, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index + 100}>
                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target={`#faq-list-${index + 1}`}>{faq.question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                    <div id={`faq-list-${index + 1}`} className="collapse show" data-bs-parent=".faq-list">
                      <p>{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      </main>
      <FooterComponent/>
    </>
  );
}

export default Faqs;
