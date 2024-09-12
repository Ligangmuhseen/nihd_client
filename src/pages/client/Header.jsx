import React, { useState, useEffect, useContext } from "react";
import logomin from "../../UserAssets/img/logomin2.png";
import { Link } from "react-router-dom";
import scrollToTop from "./ScrollUp";

const Header = () => {
  const logoStyle = {
    width: "63px",
    height: "80px",
    marginBottom: "16px",
  };

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  useEffect(() => {
    setMobileMenuVisible(false);
  }, []);

  const handleDropdownClick = (e) => {
    if (mobileMenuVisible) {
      e.preventDefault();
      e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
    }
  };

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <img src={logomin} alt="Company Logo" style={logoStyle} />

          <div className="logo me-auto">
            <h1 className="logo me-auto">
              <a>NIHD</a>
            </h1>
            <p style={{ fontSize: "5pt", color: "#2c4964" }}>
              NEHEMIAH II INTERMOLECULAR HEALTH DRUGS
            </p>
          </div>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileMenuVisible && "navbar-mobile"
            }`}
          >
            <ul>
              <li>
                <Link to="/">
                  <span
                    onClick={() => {
                      scrollToTop();
                      closeMobileMenu();
                    }}
                  >
                    Utangulizi
                  </span>
                </Link>
              </li>

              <li
                className={`dropdown ${mobileMenuVisible && "dropdown-active"}`}
              >
                <a href="#" onClick={handleDropdownClick}>
                  <span>Kuhusu sisi</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="/about">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Kuhusu Sisi
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/service">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Huduma Zetu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Bidhaa Zetu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Picha Zetu
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/societyform-2">
                  <span
                    onClick={() => {
                      scrollToTop();
                      closeMobileMenu();
                    }}
                  >
                    Ujumbe
                  </span>
                </Link>
              </li>

              <li
                className={`dropdown ${mobileMenuVisible && "dropdown-active"}`}
              >
                <a href="#" onClick={handleDropdownClick}>
                  <span>Eneo La Huduma za Kimikakati</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="/therapeutics">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Dhumuni La NIHD katika matibabu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/consumerhealth">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Huduma ya Afya kwa mteja
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contact">
                  <span
                    onClick={() => {
                      scrollToTop();

                      closeMobileMenu();
                    }}
                  >
                    Mawasiliano
                  </span>
                </Link>
              </li>

              {/* <li>
              <Link to= "/gallery"
              
               
              >
                Picha
              </Link>
            </li> */}
              <li
                className={`dropdown ${mobileMenuVisible && "dropdown-active"}`}
              >
                <a href="#" onClick={handleDropdownClick}>
                  <span>Zaidi</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="/management">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Uongozi
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Maswali na majibu
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonial">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Ushuhuda
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Kanuni ya taarifa ya faragha
                      </span>
                    </Link>
                  </li>

                  <li
                    className={`dropdown ${
                      mobileMenuVisible && "dropdown-active"
                    }`}
                  >
                    <a href="#" onClick={handleDropdownClick}>
                      <span>Masharti na fursa za ushirikiano<br/>
                         na kampuni ya NIHD</span> <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/partnership">
                          <span
                            onClick={() => {
                              scrollToTop();
                              closeMobileMenu();
                            }}
                          >
                            Ubia
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/mwenzaubia">
                          <span
                            onClick={() => {
                              scrollToTop();
                              closeMobileMenu();
                            }}
                          >
                           Kwa nini uchague NIHD kuwa mweza wa biashara
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/sheriaubia">
                          <span
                            onClick={() => {
                              scrollToTop();
                              closeMobileMenu();
                            }}
                          >
                            Sheria na Masharti ya ubia
                          </span>
                        </Link>
                      </li>
                     
                     
                    </ul>
                  </li>

                  <li>
                    <Link to="/security">
                      <span
                        onClick={() => {
                          scrollToTop();
                          closeMobileMenu();
                        }}
                      >
                        Usalama
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="dropdown">
              <Link to="strategic">
                <span  data-bs-toggle="modal" data-bs-target="#strategicmodal">
                <span>Huduma za Kimikakati</span>
                </span>
              </Link>
              <ul>
            
              </ul>
            </li> */}
            </ul>
            <i
              className={`bi bi-list mobile-nav-toggle ${
                mobileMenuVisible ? "bi-x" : ""
              }`}
              onClick={toggleMobileMenu}
            ></i>
          </nav>
          <Link to="/product">
            <span className="appointment-btn">
              <span className="d-none d-md-inline">Tazama</span> Bidhaa
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
