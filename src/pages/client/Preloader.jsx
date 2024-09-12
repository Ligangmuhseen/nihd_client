// Preloader.js (a shared component)
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a delay to simulate loading (you can replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace 2000 with the actual loading time

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    isLoading && (
      <div id="preloader">
        
      </div>
    )
  );
};

export default Preloader;
