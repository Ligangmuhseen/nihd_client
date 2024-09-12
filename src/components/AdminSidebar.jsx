
import { useEffect, useState } from "react";
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import TokenHandling from "./TokenHandling";
import $ from "jquery";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import axios from "axios";
import API_BASE_URL from "./apiConfig";


// import { a } from "react-router-dom";
// import CrudeTable from "./CrudeTable";
// import "../../AdminAssets/css/style.css";

const AdminSidebar = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [isSuperuser, setIsSuperuser] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  
  };
  

  
  useEffect(() => {
    // Retrieve the username from localStorage or your state management system
  
    const username = localStorage.getItem("loggedInUsername");
    const superUser = localStorage.getItem("Superuser");
    if (username) {
      setLoggedInUsername(username);
    }

    if (superUser === "true") {
      setIsSuperuser(true);
    }
  }, []);

  useEffect(() => {
    const toggleSidebar = () => {
      $("#sidebar").toggleClass("active");
    };

    $("#sidebarCollapse").on("click", toggleSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      $("#sidebarCollapse").off("click", toggleSidebar);
    };
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("authToken");
    navigate("/login");
    // Redirect to the login page
  };



  useEffect(() => {
    // Fetch data from the API
    axios.get(`${API_BASE_URL}/societyform3/count/`)
      .then(response => {
        // Set the retrieved message count
        setMessageCount(response.data);
      
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  

  return (
    <div className="wrapper d-flex align-items-stretch">
      <TokenHandling />
      <nav id="sidebar" style={{ maxHeight: "100%" }}>
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
            onClick={toggleSidebar}
          >
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className="p-4 pt-5">
          <h1>
            <span className="logo">Admin</span>
          </h1>
          <ul className="list-unstyled components mb-5">
            <li className={isSidebarCollapsed ? "" : "active"}>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="heroslidersec">HomeSlider</Link>
            </li>
            <li>
              <Link to="videosec">CompanyVideo</Link>
            </li>
            <li>
              <Link to="faqssec">Faqs</Link>
            </li>
            <li>
              <Link to="messagesec">Weekly Message</Link>
            </li>
            <li>
              <Link to="strategicsec">Strategic Area</Link>
            </li>
            <li>
              <Link to="whyussec">Why Us</Link>
            </li>

            <li>
              <Link to="gallerysec">Gallery</Link>
            </li>
            <li>
              <Link to="productsec">Product</Link>
            </li>
            <li>
              <Link to="testimonialsec">Testimonial</Link>
            </li>
            <li>
              <Link to="servicesec">Service</Link>
            </li>
            <li>
              <Link to="herosec">Hero section</Link>
            </li>
            <li>
              <Link to="privacysec">Privacy</Link>
            </li>
            <li>
              <Link to="securitysec">Security</Link>
            </li>
          
            <li>
              <Link to="inboxsec">
                Inbox &nbsp;
                <Badge badgeContent={messageCount.count} color="success">
                  <MailIcon color="action" />
               
                </Badge>
              </Link>
            </li>
           
            {isSuperuser && (
              <li>
                <Link to="usersec">User Management</Link>
              </li>
            )}
          </ul>

          <div className="footer">
            <p>
              Copyright &copy; &nbsp;NIHD&nbsp;
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </nav>
      <div id="content" className="p-4 p-md-5 pt-5">
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          style={{ fontSize: "1.2rem", cssFloat: "right" }}
        >
          <i
            className="bi bi-box-arrow-right"
            style={{ fontSize: "1.5rem" }}
          ></i>{" "}
          Logout
        </button>

        <h2 className="mb-4">
          <marquee>
            {" "}
            Welcome{" "}
            <span style={{ color: "darkblue" }}>
              {loggedInUsername || "Admin"}
            </span>
          </marquee>
        </h2>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;


