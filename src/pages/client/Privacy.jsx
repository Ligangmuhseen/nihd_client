import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Topbar from './Topbar';
import Header from './Header';
import FooterComponent from './FooterComponent';


const Privacy = () => {
  const [privacyContent, setPrivacyContent] = useState('');

  useEffect(() => {
    // Define the URL of your API endpoint for the privacy content
    const apiUrl = `${API_BASE_URL}/privacy/upload/1/`; // Replace with your actual API endpoint

    // Make an Axios GET request to fetch the privacy content
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched content
        setPrivacyContent(response.data.privacies);
      })
      .catch(error => {
        console.error('Error fetching privacy content:', error);
      });
  }, []);

  return (
    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
    <section id="privacy" className="services">
      
        
      <div className="container">
      <div className="section-title">
          <h2>Kanuni ya taarifa ya faragha</h2>
          </div>
        <div className="row">
          <div className="col-md-12">
            <div style={{ textAlign: "justify", textJustify: "inter-word" }}>
              <p style={{ wordSpacing: '10px', lineHeight: '1.5' }}>{privacyContent}</p>
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

export default Privacy;


