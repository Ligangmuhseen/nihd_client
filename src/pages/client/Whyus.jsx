import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import { Link } from 'react-router-dom';
import scrollToTop from './ScrollUp';

const Whyus = () => {
  const [whyChooseData, setWhyChooseData] = useState({});
  const [iconBoxesData, setIconBoxesData] = useState([]);

  useEffect(() => {
    // API to get "Why Choose NIHD" and its description
    axios.get(`${API_BASE_URL}/whyusone/upload/`)
      .then((response) => {
        setWhyChooseData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching "Why Choose NIHD" data:', error);
      });

    // API to get icon box details
    axios.get(`${API_BASE_URL}/whyustwo/upload/`)
      .then((response) => {
        setIconBoxesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching icon box data:', error);
      });
  }, []);

  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content" style={{}}>
                <h3>{whyChooseData.heading}</h3>
                <p  style={{ textAlign: "justify", textJustify: "inter-word" }}>{whyChooseData.description}</p>
                <div className="text-center">
                  <Link to="/readmore" onClick={scrollToTop}><a className="more-btn">Soma Zaidi <i className="bx bx-chevron-right"></i></a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  {iconBoxesData.map((iconBox, index) => (
                    <div className="col-xl-4 d-flex align-items-stretch" key={index}>
                      <div className="icon-box mt-4 mt-xl-0" >
                        <img style={{width:"50px"}} src={iconBox.icon} alt="icon" />
                        
                        <h4>{iconBox.title}</h4>
                        <p>{iconBox.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whyus;
