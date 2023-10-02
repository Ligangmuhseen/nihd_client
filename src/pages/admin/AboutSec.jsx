import React from 'react'
import AbMainTable2 from './tablesforms/AbMainTable2'
import AbMainTable from './tablesforms/AbMainTable'
import { Outlet } from 'react-router-dom'

const AboutSec = () => {
  return (
    <div>About Section<br/>

    

      <label className="form-label" for="customFile">Upload a background header image</label>
      <input type="file" className="form-control" id="customFile" />
      <button type="button" class="btn btn-primary m-2">Upload</button><br/><br/><br/>


      <AbMainTable2 /><br/><br/><br/>

      <Outlet/>
      <AbMainTable/>



      

     

    </div>
  )
}

export default AboutSec