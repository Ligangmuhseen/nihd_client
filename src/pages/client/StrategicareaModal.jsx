import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './strategic.css';

const StrategicareaModal = () => {
  const [clickedLink, setClickedLink] = useState('');

  const handleLinkClick = (linkId) => {
    setClickedLink(linkId);
  };

  return (
    <>
      <div className="modal fade" id="strategicmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '23pt', color: '#2c4964', fontWeight: 'bold' }}>Eneo la Kimkakati</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container mt-4">
                <div className="row">
                  {/* Add your content here */}
                  <div className="col-md-6 col-lg-3">
                    <Link to=""> <a className={`link-style ${clickedLink === 'link1' ? 'clicked' : ''}`} onClick={() => handleLinkClick('link1')}>
                      Dhumuni la NIHD katika matibabu
                      </a>
                    </Link>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <Link to="consumerhealth"> <a className={`link-style ${clickedLink === 'link2' ? 'clicked' : ''}`} onClick={() => handleLinkClick('link2')}>
                      Huduma Ya Afya Inayotolewa Na NHID Kwa Mteja
                      </a>
                    </Link>
                  </div>
                  {/* <div className="col-md-6 col-lg-3">
                    <Link to="consumerhealth"> <a  className={`link-style ${clickedLink === 'link3' ? 'clicked' : ''}`} onClick={() => handleLinkClick('link3')}>
                      NHID Hospital Care
                      </a>
                    </Link>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <Link to="consumerhealth">
                      <a className={`link-style ${clickedLink === 'link4' ? 'clicked' : ''}`} onClick={() => handleLinkClick('link4')}>
                      NIHD Aesthetics
                      </a>
                    </Link>
                  </div> */}
                  <br/>
                  <br/>
                  <br/>
                  
                </div>
                <Outlet/>
              </div>
            </div>
           
          </div>
        </div>
       
      </div>
    </>
  );
};

export default StrategicareaModal;
