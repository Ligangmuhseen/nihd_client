import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import CounterContext from "./components/CounterContext.jsx";
import "bootstrap";

//import User from './components/User.jsx'
//import Login from './components/Login.jsx';
//import CustomScriptComponent from './pages/client/CustomScriptComponent.jsx';
//import AdminSidebar from './components/AdminSidebar';
import "./i18n.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
        <App />
      
  </React.StrictMode>
);
