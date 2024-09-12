import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../components/apiConfig";
import Header from "./Header.jsx";
import FooterComponent from "./FooterComponent";
import Topbar from "./Topbar";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const About = () => {
  const [open, setOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");
  const [iconBoxData, setIconBoxData] = useState([]);
  const [healthValues, setHealthValues] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoVisible, setVideoVisible] = useState(false); // State to control video visibility

  useEffect(() => {
    // Fetch background image
    axios
      .get(`${API_BASE_URL}/background/upload/`)
      .then((response) => {
        setBackgroundImage(response.data[0].image);
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
      });

    // Fetch story description
    axios
      .get(`${API_BASE_URL}/aboutone/upload/`)
      .then((response) => {
        setAboutDescription(response.data.description);
        setStoryDescription(response.data[0].story);
      })
      .catch((error) => {
        console.error("Error fetching story description:", error);
      });

    // Fetch icon box data
    axios
      .get(`${API_BASE_URL}/abouttwo/upload/`)
      .then((response) => {
        setIconBoxData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching icon box data:", error);
      });

    // Fetch health values
    axios
      .get(`${API_BASE_URL}/health/upload/`)
      .then((response) => {
        setHealthValues(response.data);
      })
      .catch((error) => {
        console.error("Error fetching health values:", error);
      });

    // Fetch video URL
    axios
      .get(`${API_BASE_URL}/video/upload/`)
      .then((response) => {
        setVideoUrl(response.data[0].Video);
      })
      .catch((error) => {
        console.error("Error fetching video URL:", error);
      });
  }, []);

  const mystyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "600px",
    height: "700px",
  };

  const handleClick = () => {
    setVideoVisible(true); // Show the video when the <a> is clicked
  };

  const handleClose = () => {
    setVideoVisible(false); // Close the video
  };

  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Tujue Sisi</h2>
            </div>

            <div className="row">
              <div
                className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative"
                style={mystyle}
              >
                {videoVisible ? (
                  <div>
                    <video
                      autoPlay
                      controls
                      style={{ width: "100%", height: "50%" }}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                    className="btn"
                      onClick={handleClose}
                      
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor:"#abc3e7"
                      }}
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <a
                    onClick={handleClick}
                    className="glightbox play-btn mb-4"
                  ></a>
                )}
              </div>

              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Kuhusu Sisi</h3>
                <p>{aboutDescription}</p>

                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{ backgroundColor: "#87b3ed", width: "200px" }}
                >
                  Historia yetu
                </Button>
                <Collapse in={open}>
                  <div
                    id="example-collapse-text"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    {storyDescription}
                  </div>
                </Collapse>

                {iconBoxData.map((item, index) => (
                  <div className="icon-box" key={index}>
                    <div className="icon">
                      <i>
                        {" "}
                        <img src={item.icon} alt="" />{" "}
                      </i>
                    </div>
                    <h4 className="title">{item.heading}</h4>
                    <p className="description">{item.description}</p>
                  </div>
                ))}

                <ul
                  className="list-group list-group-flush"
                  style={{ marginLeft: "70px" }}
                >
                  {healthValues.map((value, index) => (
                    <span key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="#1977cc"
                          d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                        />
                      </svg>
                      {value.item}
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default About;
