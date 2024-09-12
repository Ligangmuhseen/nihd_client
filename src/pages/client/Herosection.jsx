// import React from 'react'
// import { useTranslation } from "react-i18next";
// import herobg from "../../UserAssets/img/hero-bg.jpg"





// const Herosection = () => {
//   const { t, i18n } = useTranslation();

//   const mystyle={
//     backgroundImage: `url(${herobg})`,
//     backgroundPosition: 'center top'

//   }

//   return (
//     <>


//       <section id="hero" className="d-flex align-items-center" style={mystyle}>



//         <div className="container">

//           <h1>Welcome to NIHD</h1>

//           <h2>{t('slogan')}</h2>

//           <a href="#about" className="btn-get-started scrollto">Get Started</a>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Herosection



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Header from './Header';
import FooterComponent from './FooterComponent';
import Whyus from './Whyus';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';



const Herosection = () => {

  const [heroData, setHeroData] = useState({
    backgroundImage: '',
    title: '',
    slogan: '',
  });

  const [imageSlider, setImageSlider] = useState([]);

  useEffect(() => {
    // Initialize the Swiper slider when the component mounts
    new Swiper('.image-slider', {
      // Swiper configuration options here
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }, []);

  useEffect(() => {
    // Fetch image slider data and update state
    const fetchImageSlider = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/heroslider/upload/`); // Replace with your API endpoint
        setImageSlider(response.data); // Assuming your API returns an array of image objects
      } catch (error) {
        console.error('Error fetching image slider:', error);
      }
    };

    fetchImageSlider();
  }, []);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios.get(`${API_BASE_URL}/hero/upload/`)
      .then((response) => {
        const data = response.data[0];
        setHeroData({
          backgroundImage: data.image,
          title: data.mainheading,
          slogan: data.subheading,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const mystyle = {
    backgroundImage: `url(${heroData.backgroundImage})`,

    backgroundPosition: 'center top',
    paddingTop: "12rem"
  };

  return (
    <>
      <Topbar />
      <Header />

      
      <section id="hero" className="d-block align-items-center" style={mystyle}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12" data-aos="fade-up" data-aos-delay="900">
              <h1>{heroData.title}</h1>
              <h2  style={{ textAlign: "justify", textJustify: "inter-word" }}>{heroData.slogan}</h2>
              <Link to="/about">
              <a className="btn-get-started scrollto">

              
                Anza
              </a>
              </Link>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12"  id="hero-slider">
              <div className="image-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">
                  {imageSlider.map((images, index) => (
                    <div className="swiper-slide" key={index}>
                      <img src={images.image} alt="alt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <main id="main">
        <Whyus />
      </main>
      <FooterComponent />
    </>
  );
};

export default Herosection;
