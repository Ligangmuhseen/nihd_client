import React from 'react'
import { useTranslation } from "react-i18next";
import GoogleTranslate from './GoogleTranslate';


const Topbar = () => {

  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);


  }

  const customStyle = {
    paddingTop:"0px",
    backgroundColor:"#267ced",
    width:63,
    color:"white",
    margin:10,
    borderStyle:"none",
    cursor:"pointer"
  

  }








  return (
    <>
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope"></i> <a href="mailto:ibrahimanehemia@gmail.com">info@nihd.co.tz</a>
        <i className="bi bi-phone"></i> +255782660707
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="https://x.com/plasmatichvirus?s=09" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61551022932578" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://instagram.com/nehemiah_intermolecular_tz?igshid=YzU1NGVlODEzOA==" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/company/nehemiah-inter-molecular-health-drugs-limited/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>

    {/* <select className="custom-select" style={customStyle} onChange={changeLanguageHandler}>
        <option value="en" style={{Color:"white"}}><i className="flag flag-united-states"></i>En </option>
        <option value="sw"><i className="flag flag-tanzania"></i>Sw </option>
      </select> */}

    



  </div>
    </>
  );
}

export default Topbar