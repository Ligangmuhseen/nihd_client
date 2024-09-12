import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Google Translate initialization code
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'sw',
          includedLanguages: 'en,sw',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    }

    // Load the Google Translate API script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    
  }, []); // Empty dependency array to run this effect only once

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
