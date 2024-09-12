import React, { useState } from "react";
import AbMainTable2 from './tablesforms/AbMainTable2'
import AbMainTable from './tablesforms/AbMainTable'
import { Outlet } from 'react-router-dom'
import axios from "axios"; // Import Axios
import API_BASE_URL from "../../components/apiConfig";


const AboutSec = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      axios.put(`${API_BASE_URL}/background/upload/1/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          // Handle success (e.g., show a success message)
         
          alert("backgroundimage submitted");
          window.location.reload();

        })
        .catch((error) => {
          // Handle error (e.g., show an error message)
          console.error("Error uploading file:", error);
        });
    }
  };





  return (
    <div>About Section<br/>

    

<div>
      <label className="form-label" htmlFor="customFile">
        Upload a background header image
      </label>
      <input
        type="file"
        className="form-control"
        id="customFile"
        onChange={handleFileChange}
      />
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={handleUpload}
      >
        Upload
      </button>
      <br />
      <br />
      <br />
    </div>


      <AbMainTable2 /><br/><br/><br/>

      <Outlet/>
      <AbMainTable/>



      

     

    </div>
  )
}

export default AboutSec