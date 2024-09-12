// import React from 'react'

// const ServiceSection = () => {

//     return (
//         <>
//             <section id="services" className="services">
//                 <div className="container">

//                     <div className="section-title">
//                         <h2>Services</h2>
//                         <p>"At NIHD, we are dedicated to your well-being, committed to fostering a world where health meets happiness. With a passion for nurturing well-being and empowering healthier choices, we take pride in being your trusted partner on the journey to optimal health.</p>
//                     </div>

//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-heartbeat"></i></div>
//                                 <h4>Provide health participation advice</h4>

//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-pills"></i></div>
//                                 <h4>Provide health education to the society and community</h4>

//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-hospital-user"></i></div>
//                                 <h4>Follow up community health behavior</h4>

//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-dna"></i></div>
//                                 <h4><a href="">Nemo Enim</a></h4>
//                                 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-wheelchair"></i></div>
//                                 <h4><a href="">Dele cardo</a></h4>
//                                 <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
//                             <div className="icon-box">
//                                 <div className="icon"><i className="fas fa-notes-medical"></i></div>
//                                 <h4><a href="">Divera don</a></h4>
//                                 <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//         </>
//     );
// }

// export default ServiceSection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../../components/apiConfig";
import Header from "./Header";
import FooterComponent from "./FooterComponent";
import Topbar from "./Topbar";
import scrollToTop from "./ScrollUp";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const buttonWords = ["Shiriki", "Soma", "Shiriki","","",""];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/service/upload/`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setServices([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Huduma Zetu</h2>
              <p>
              "NIHD, tumejitolea kwa ajili ya ustawi bora wa afya yako.
Tumejitolea kukuza Ulimwenguni wenye jamii yenye afya bora na furaha.
Kwa shauku ya kukuza ustawi wa afya bora kwa jamii tunakuwezesha kushiriki katika uchaguzi wa matibabu ya uimarishaji wa ustawi wa afya bora.
Tunafaraja ya kuwa mshiriki wetu unayetuamini katika safari yako ya ustawi wa afya bora"
              </p>
            </div>
            <div className="row">
              {services.map((services, index) => (
                <div
                  key={services.id}
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                >
                  <div className="icon-box" style={{ height: "600px" }}>
                    <div className="icon">
                      <img
                        src={services.image}
                        style={{ width: "50px" }}
                        alt="service-img"
                      />
                    </div>
                    <h4 style={{ height: "60px" }}>{services.service}</h4>
                    <p style={{ height: "300px" }}>
                      {services.description}
                    </p>

                    <div>
                      <Link
                        to={`/societyform-${services.id}`}
                        onClick={() => {
                          scrollToTop();
                        }}
                      >
                        <button style={{backgroundColor:"#abc3e7"}} className="btn threebutton">{buttonWords[index]}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default ServiceSection;
