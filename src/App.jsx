import React from "react";
import Preloader from "./pages/client/Preloader";
import MyRoutes from "./utils/MyRoutes";
import { CsrfTokenProvider } from "./components/CSRFTokenContext.jsx"; //

function App() {
  return (
    <>
      <Preloader />
      <CsrfTokenProvider>
        <MyRoutes />
      </CsrfTokenProvider>
    </>
  );
}

export default App;
