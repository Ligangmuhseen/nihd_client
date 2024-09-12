// import React, {useEffect} from 'react';
// import testimonials1 from "../../UserAssets/img/testimonials/testimonials-1.jpg";
// import '../../UserAssets/vendor/swiper/swiper-bundle.min.css';

// function Testimonial() {


//   useEffect(() => {
//     // Initialize the Swiper slider when the component mounts
//     new Swiper('.testimonials-slider', {
//       // Swiper configuration options here
//       speed: 600,
//       loop: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//       },
//       slidesPerView: 'auto',
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 20
//         },
//         1200: {
//           slidesPerView: 2,
//           spaceBetween: 20
//         }
//       }
//     });
//   }, []);
//   return (
//     <>



// <section id="testimonials" className="testimonials">
//       <div className="container">

//         <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
//           <div className="swiper-wrapper">

//             <div className="swiper-slide">
//               <div className="testimonial-wrap">
//                 <div className="testimonial-item">
//                   <img src={testimonials1} className="testimonial-img" alt=""/>
//                   <h3>Saul Goodman</h3>
//                   <h4>Ceo &amp; Founder</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                     Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
//                     <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide">
//               <div className="testimonial-wrap">
//                 <div className="testimonial-item">
//                   <img src={testimonials1} className="testimonial-img" alt=""/>
//                   <h3>Sara Wilsson</h3>
//                   <h4>Designer</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                     Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
//                     <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide">
//               <div className="testimonial-wrap">
//                 <div className="testimonial-item">
//                   <img src={testimonials1} className="testimonial-img" alt=""/>
//                   <h3>Jena Karlis</h3>
//                   <h4>Store Owner</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                     Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
//                     <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide">
//               <div className="testimonial-wrap">
//                 <div className="testimonial-item">
//                   <img src={testimonials1} className="testimonial-img" alt=""/>
//                   <h3>Matt Brandon</h3>
//                   <h4>Freelancer</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                     Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
//                     <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide">
//               <div className="testimonial-wrap">
//                 <div className="testimonial-item">
//                   <img src={testimonials1} className="testimonial-img" alt=""/>
//                   <h3>John Larson</h3>
//                   <h4>Entrepreneur</h4>
//                   <p>
//                     <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                     Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
//                     <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div className="swiper-pagination"></div>
//         </div>

//       </div>
//     </section>


//     </>

//   );
// }

// export default Testimonial


import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../UserAssets/vendor/swiper/swiper-bundle.min.css';
import API_BASE_URL from '../../components/apiConfig';
import Header from './Header';
import FooterComponent from "./FooterComponent";
import Topbar from './Topbar';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  // Initialize the Swiper slider when the component mounts
  new Swiper('.testimonials-slider', {
    // Swiper configuration options here
    speed: 600,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
});

  useEffect(() => {
    // Fetch testimonials data and update state
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/testimonials/upload/`); // Replace with your API endpoint
        setTestimonials(response.data); // Assuming your API returns an array of testimonial objects
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
      <section id="testimonials" className="testimonials">
        <div className="container">
        <div className="section-title">
          <h2>Ushuhuda</h2>
          <p>
              Ushuhuda wetu
          </p>
        </div>
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src={testimonial.image} className="testimonial-img" alt="" />
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.position}</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {testimonial.words}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      </main>
      <FooterComponent/>
    </>

  );
}
export default Testimonial;
