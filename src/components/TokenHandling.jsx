import React, { useEffect } from 'react'

import jwt_decode from 'jwt-decode';

const TokenHandling = () => {

     // Function to check and remove expired tokens
     const checkTokenExpiration = () => {
        const token = localStorage.getItem('authToken');
    
        if (token) {
          const decodedToken = jwt_decode(token);
          const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
    
          if (Date.now() >= expirationTime) {
            // Token has expired, remove it from localStorage
            alert("session Expired");
            localStorage.removeItem('authToken');
            window.location.reload();
  
          }
        }
      };
    
      useEffect(() => {
        // Check and remove expired tokens every minute (you can adjust the interval)
        const expirationCheckInterval = setInterval(checkTokenExpiration, 10000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(expirationCheckInterval);
      }, []);
  
  
  
  return (

    null
  )
}

export default TokenHandling