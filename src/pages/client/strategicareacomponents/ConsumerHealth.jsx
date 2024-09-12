import React, { useEffect, useState } from "react";
import axios from "axios";
import consumerhealth from "./consumerhealth.jpeg";
import API_BASE_URL from "../../../components/apiConfig";
import Header from "../Header";
import Topbar from "../Topbar";
import FooterComponent from "../FooterComponent";
import { Link } from "react-router-dom";

const ConsumerHealth = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: consumerhealth,
  });

  useEffect(() => {
    // Define your API endpoint URL

    axios
      .get(`${API_BASE_URL}/strategictwo/upload/`)
      .then((response) => {
        // Assuming the API response contains a title and description
        const responseData = response.data[0];

        setData({
          title: responseData.heading,
          description: responseData.description,
          image: responseData.image || consumerhealth,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty array [] ensures this effect runs once when the component mounts

  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="products" className="services">
          <div className="container">
            <div className="section-title">
              <h2>{data.title}</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    className="img-fluid"
                    src={data.image}
                    alt="consumer health"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p
                    style={{
                      wordSpacing: "10px",
                      lineHeight: "1.5",
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
              <div className="mt-3" style={{textAlign:"center"}}>

              <Link to="/service">
                <button
                  style={{ backgroundColor: "#1977cc",color:"white" }}
                  className="btn threebutton"
                >
                  shiriki
                </button>
              </Link>

              </div>
             
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default ConsumerHealth;
