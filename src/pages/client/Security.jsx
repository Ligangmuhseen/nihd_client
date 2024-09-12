import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Topbar from './Topbar';
import Header from './Header';
import FooterComponent from './FooterComponent';

const Security = () => {
  const [securityContent, setSecurityContent] = useState('');

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = `${API_BASE_URL}/security/upload/1/`; // Replace with your actual API endpoint

    // Make an Axios GET request to fetch the security content
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched content
        setSecurityContent(response.data.securities);
      })
      .catch(error => {
        console.error('Error fetching security content:', error);
      });
  }, []);

  return (
    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
    <section id="products" className="services">
      
        
      <div className="container">
      <div className="section-title">
          <h2>Usalama</h2>
          </div>
        <div className="row">
          <div className="col-md-12">
            <div  style={{ textAlign: "justify", textJustify: "inter-word" }}>
              <p style={{ wordSpacing: '10px', lineHeight: '1.5' }}>{securityContent}</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      </main>
      <FooterComponent/>
    </>
  );
};

export default Security;
