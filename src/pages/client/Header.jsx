import React, { useState, useEffect } from 'react';
import logomin from "../../UserAssets/img/logomin2.png";

const Header = () => {

  const logoStyle = {
    width:"50px",
    height:"60px"
   

      
  };
  // Define a state variable to track the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  // Close mobile menu on page load
  useEffect(() => {
    setMobileMenuVisible(false);
  }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  // Function to scroll to a section
  const scrollto = (el) => {
    let header = document.querySelector('#header');
    let offset = header.offsetHeight;

    let elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  };

  return (
    <header id="header" className="fixed-top">
         
      <div className="container d-flex align-items-center">
      <img src={logomin} alt="Company Logo" style={logoStyle} />
       
        <h1 className="logo me-auto">
        
          <a href="index.html">NHID</a>
        </h1>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${mobileMenuVisible ? 'navbar-mobile' : ''
            }`}
        >
          <ul>
            <li>
              <a
                className="nav-link scrollto active"
                href="#hero"
                onClick={() => {
                  scrollto('#hero');
                  closeMobileMenu();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={() => {
                  scrollto('#about');
                  closeMobileMenu();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#services"
                onClick={() => {
                  scrollto('#services');
                  closeMobileMenu();
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#departments"
                onClick={() => {
                  scrollto('#departments');
                  closeMobileMenu();
                }}
              >
                Mission
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#departments"
                onClick={() => {
                  scrollto('#departments');
                  closeMobileMenu();
                }}
              >
                Vision
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#doctors"
                onClick={() => {
                  scrollto('#doctors');
                  closeMobileMenu();
                }}
              >
                Doctors
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      // Add onClick handler for "Drop Down 1"
                      closeMobileMenu();
                    }}
                  >
                    Drop Down 1
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{' '}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => {
                          // Add onClick handler for "Deep Drop Down 1"
                          closeMobileMenu();
                        }}
                      >
                        Deep Drop Down 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => {
                          // Add onClick handler for "Deep Drop Down 2"
                          closeMobileMenu();
                        }}
                      >
                        Deep Drop Down 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => {
                          // Add onClick handler for "Deep Drop Down 3"
                          closeMobileMenu();
                        }}
                      >
                        Deep Drop Down 3
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => {
                          // Add onClick handler for "Deep Drop Down 4"
                          closeMobileMenu();
                        }}
                      >
                        Deep Drop Down 4
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => {
                          // Add onClick handler for "Deep Drop Down 5"
                          closeMobileMenu();
                        }}
                      >
                        Deep Drop Down 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      // Add onClick handler for "Drop Down 2"
                      closeMobileMenu();
                    }}
                  >
                    Drop Down 2
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      // Add onClick handler for "Drop Down 3"
                      closeMobileMenu();
                    }}
                  >
                    Drop Down 3
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      // Add onClick handler for "Drop Down 4"
                      closeMobileMenu();
                    }}
                  >
                    Drop Down 4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={() => {
                  scrollto('#contact');
                  closeMobileMenu();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${mobileMenuVisible ? 'bi-x' : ''
              }`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>

        <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">View</span> Medicines
        </a>
      </div>
    </header>
  );
};

export default Header;
