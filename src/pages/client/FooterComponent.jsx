import React from "react";
import { Link } from "react-router-dom";
import UpButton from "./UpButton";
import scrollToTop from "./ScrollUp";

const FooterComponent = () => {
  const linkStyle = {
    color: "#777777",
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>NIHD</h3>
                <p>
                  Mtaa
                  <br />
                  Dar es salaam
                  <br />
                  Tanzania
                  <br />
                  <br />
                  <strong>Nambari ya simu:</strong>
                  <span style={{ fontFamily: "sanserif" }}>
                    +255782660707
                  </span>{" "}
                  <br />
                  <Link to="/contact" onClick={scrollToTop} style={linkStyle}>
                    <strong>Barua pepe:</strong>
                    <span className="pepe">info@nihd.co.tz</span>
                    <br />
                  </Link>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Yaliyomo</h4>

                <Link to="/" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Utangulizi
                  </p>
                </Link>
                <Link to="/about" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Kuhusu sisi
                  </p>
                </Link>
                <Link to="/service" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Huduma zetu
                  </p>
                </Link>
                <Link to="/product" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Bidhaa Zetu
                  </p>
                </Link>
                <Link to="/partnership" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Ubia
                  </p>
                </Link>
                <Link to="/privacy" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Kanuni ya taarifa ya
                    faragha
                  </p>
                </Link>
                <Link to="/security" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Usalama
                  </p>
                </Link>
                <a href="https://nihd.co.tz/webmail" target="_blank" onClick={scrollToTop} style={linkStyle}>
                  <p>
                    <i className="bx bx-chevron-right"></i>Web Mail
                  </p>
                </a>
              </div>

              <div className="col-lg-5 col-md-6 footer-links">
                <h4>Huduma zetu</h4>

                <Link
                  to="/societyform-1"
                  onClick={scrollToTop}
                  style={linkStyle}
                >
                  <p>
                    <i className="bx bx-chevron-right"></i>Kutoa ushauri wa
                    ushiriki wa afya
                  </p>
                </Link>
                <Link
                  to="/societyform-2"
                  onClick={scrollToTop}
                  style={linkStyle}
                >
                  <p>
                    <i className="bx bx-chevron-right"></i>Kutoa elimu ya afya
                    kwa jamii
                  </p>
                </Link>
                <Link
                  to="/societyform-3"
                  onClick={scrollToTop}
                  style={linkStyle}
                >
                  <p>
                    <i className="bx bx-chevron-right"></i>Kufuatilia tabia ya
                    afya ya jamii
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              Hakimiliki &copy;
              <strong>
                <span style={{ color: "darkblue" }}>
                  &nbsp;NIHD {new Date().getFullYear()} &nbsp;
                </span>
              </strong>
              Haki zote zimehifadhiwa
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://x.com/plasmatichvirus?s=09" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61551022932578"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://instagram.com/nehemiah_intermolecular_tz?igshid=YzU1NGVlODEzOA=="
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="http://plasmatichumanvirus.blogspot.com/?m=1"
              className="blogger"
            >
              <i className="bx bxl-blogger"></i>
            </a>
            <a
              href="https://youtube.com/@nehemiahbudi5753?si=AbFO4eSwpT_CmvFg"
              className="youtube"
            >
              <i className="bx bxl-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/nehemiah-inter-molecular-health-drugs-limited/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <UpButton />
      </footer>
    </>
  );
};

export default FooterComponent;
