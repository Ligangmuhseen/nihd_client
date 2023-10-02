import { useEffect,useState } from "react";
import React from 'react';
import {Outlet,Link} from 'react-router-dom'
// import { a } from "react-router-dom";
// import CrudeTable from "./CrudeTable";
// import "../../AdminAssets/css/style.css";


const AdminSidebar = () => {

      const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    
       const toggleSidebar = () => {
         setSidebarCollapsed(!isSidebarCollapsed);
       };

  useEffect(() => {
    const toggleSidebar = () => {
      $('#sidebar').toggleClass('active');
    };

    $('#sidebarCollapse').on('click', toggleSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      $('#sidebarCollapse').off('click', toggleSidebar);
    };
  }, []);

  return (
    <div className="wrapper d-flex align-items-stretch">
           <nav id="sidebar">
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
                <Link to="index.html" className="logo">
                  Admin
                </Link>
              </h1>
              <ul className="list-unstyled components mb-5">
                <li className={isSidebarCollapsed ? '' : 'active'}>
                  <Link to="">

                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded={!isSidebarCollapsed}
                    className="dropdown-toggle"
                  >
                    About
                  </a>


                  </Link>
                  
                  <ul
                    className={`collapse list-unstyled ${
                      isSidebarCollapsed ? '' : 'show'
                    }`}
                    id="homeSubmenu"
                  >
                    <li>
                      <Link to="#">Picture</Link>
                    </li>
                    <li>
                      <Link to="#">Mainbox</Link>
                    </li>
                    <li>
                      <Link to="#">Subbox</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="faqssec">Faqs</Link>
                </li>
                <li>
                  <Link to="whyussec">

                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded={!isSidebarCollapsed}
                    className="dropdown-toggle"
                  >
                    Why Us
                  </a>

                 



                  </Link>
                  </li>
                  
                  <ul
                    className={`collapse list-unstyled ${
                      isSidebarCollapsed ? '' : 'show'
                    }`}
                    id="pageSubmenu"
                  >
                    <li>
                      <Link to="#">Mainbox</Link>
                    </li>
                    <li>
                      <Link to="#">Subbox</Link>
                    </li>
                   
                  </ul>
              
                <li>
                  <Link to="gallerysec">Gallery</Link>
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
              </ul>
              
              <div className="footer">
                <p>
                Copyright &copy;
                  {new Date().getFullYear()}<br/>
                LigangMuhseen
            
                </p>
              </div>
            </div>
          </nav>
          <div id="content" className="p-4 p-md-5 pt-5">
            <h2 className="mb-4"><marquee>Welcome Admin</marquee></h2>
            <Outlet/>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p> */}
          </div>
        </div>
  );
}

export default AdminSidebar



