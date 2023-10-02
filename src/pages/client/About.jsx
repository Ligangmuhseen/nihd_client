import React from 'react'


const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container-fluid">

          <div className="section-title">
            <h2>Get To Know Us</h2>

          </div>

          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>About us</h3>
              <p>We deal with medicine and African medical research such as biomedical which is at the intermolecular level in a similar way to Gene therapy.</p>




              <button class="btn btn-success w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Our Story
              </button>

              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Allah, the God of mercy, has blessed us, medicines of the PHV system strengthen our health.

                  Our story
                  NIHD was founded in 2023 by Mr. Amri Budi, a  Clinical Officer, founder of PHVs medicines who was  commenced in clinical research since 1996.
                  Medical institutions face with limitations in implementing innovative ideas in the field of medicine, having deep knowledge on good medical methods and establishing systems that enable the community to get good medical services.
                  Amri discovered solution of health problems in the community.  In the pursuit of innovation, he engaged the relevant institutions but they failed to participate properly due to the established procedure, then he gathered various types of experts in and out of health field and created NIHD company, to providing the community better health care
                  We thank you for recognizing our presence, now you will share the benefits derived from our services
                  “Twenty seven years of research and experience in PHVs system medicine”
                  Amri Budi, Clinical officer in Medicines
                  President of Supervisory Board,
                  Founder of NIHD and PHVs medicine
                </div>
              </div>







              <div className="icon-box">
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title"><a href="">Mission</a></h4>
                <p className="description">Developing high quality medicines that are based on clinical research aimed at providing safe treatment and effective treatment of disease conditions.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-gift"></i></div>
                <h4 className="title"><a href="">Vision</a></h4>
                <p className="description">To have a society with healthy people and lead to economic growth at a better level.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <h4 className="title"><a href="">Health Value</a></h4>
                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
              </div>
              <ul className="list-group list-group-flush">
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Dedication</a></p>
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Team Work</a></p>
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Customer Care</a></p>
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Increasing the quality of service</a></p>
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Exceeding all customer expectation </a></p>
                <p className='list-group-item'><i className="bx bx-chevron-right"></i> <a href="#">Building long - term relationship with suppliers and customers </a></p>
              </ul>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const About = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make an HTTP request to your Django API using Axios
//     axios.get('http://127.0.0.1:8000/upload/')
//       .then(response => {
//         // Update the state with the fetched data
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <>
//       {data.map(item => (
//         <div key={item.id} className="icon-box">
//           <div className="icon">
//           <img style={{width:"200px",height:"200px"}}src={`${item.icon}`} alt={item.heading} />

//           </div>
//           {/* Use the "icon" field from your API for the relative path of the image */}
//           <h4 className="title">
//             <a href="">{item.heading}</a>
//           </h4>
//           {/* Use the "title" field from your API for the heading */}
//           <p className="description">
//             {item.subheading}
//           </p>
//           {/* Use the "description" field from your API for the description */}
//         </div>
//       ))}
//     </>
//   );
// }

// export default About;

