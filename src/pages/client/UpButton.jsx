import React, { useEffect } from 'react';

const UpButton = () => {
  useEffect(() => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    };

    // Back to top button element
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
      // Add click event listener to scroll back to top when the button is clicked
      backToTopButton.addEventListener('click', scrollToTop);

      // Function to toggle the "active" class on the button based on scroll position
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTopButton.classList.add('active');
        } else {
          backToTopButton.classList.remove('active');
        }
      };

      // Add scroll event listener to toggle the button visibility
      window.addEventListener('scroll', toggleBackToTop);

      // Initial check for button visibility when the page loads
      toggleBackToTop();
    }

    // Preloader logic
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }, []);

  return (
    <>
      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default UpButton;

