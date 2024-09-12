import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Header from './Header';
import FooterComponent from "./FooterComponent";
import Topbar from "./Topbar";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    // Fetch gallery data and update state
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/gallery/upload/`); // Replace with your API endpoint
        setGalleryItems(response.data); // Assuming your API returns an array of gallery items
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (

    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Picha Zetu</h2>
            <p>Karibu kwenye Picha zetu</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row g-0">
            {galleryItems.map((item, index) => (
              <div className="col-lg-3 col-md-4" key={index}>
                <div className="gallery-item">
                  <a href="#" className="gallery-lightbox">
                    <img src={item.images} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <FooterComponent/>
    </>
  );
};

export default Gallery;
