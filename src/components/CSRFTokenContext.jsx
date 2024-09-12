import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './apiConfig';



const CsrfTokenContext = createContext();

export const useCsrfToken = () => {
  return useContext(CsrfTokenContext);
};

export const CsrfTokenProvider = ({children}) => {
  const [csrfToken, setCsrfToken] = useState(null);

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/form/api/get_csrf_token/`); // Replace with the actual URL of your Django endpoint
        setCsrfToken(response.data.csrf_token);
       
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCSRFToken();
  }, []);

  return (
    <CsrfTokenContext.Provider value={csrfToken}>
      {children}
    </CsrfTokenContext.Provider>
  );
};
