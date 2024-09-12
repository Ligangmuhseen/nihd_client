import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Topbar from './Topbar';
import Header from './Header';
import FooterComponent from './FooterComponent';


const Readmore = () => {
  const [readmoreContent, setReadmoreContent] = useState("");

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = `${API_BASE_URL}/whyusone/upload/1/`; // Replace with your actual API endpoint

    // Make an Axios GET request to fetch the security content
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched content
        setReadmoreContent(response.data.readmore);
      })
      .catch(error => {
        console.error('Error fetching readmore content:', error);
      });
  }, []);


  const splitAndProcessData = () => {
   
        // Split data based on the criteria "1.", "2.", "3."
        const splitParts = readmoreContent.split(/\n(?=\d+\.\s*)/);
       

        // Process the data as needed
        const processedData = (
            <div>
                {splitParts.map((part, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <br />} {/* Add a line break after the first item */}
                        <div>{part.trim()}</div>
                    </React.Fragment>
                ))}
            </div>
        );

        return processedData;
    
};



  return (
    <>
    <Topbar/>
    <Header/>
    <main id="main" style={{paddingTop:"80px"}}>
    <section id="products" className="services">
      
        
      <div className="container">
      <div className="section-title">
          <h2>Kwa nini uchague NIHD</h2>
          </div>
        <div className="row">
          <div className="col-md-12">
            <div  style={{ textAlign: "justify", textJustify: "inter-word" }}>
              <p style={{ wordSpacing: '10px', lineHeight: '1.5' }}>{splitAndProcessData()}</p>
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

export default Readmore;
