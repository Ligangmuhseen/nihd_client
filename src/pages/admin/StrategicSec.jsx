import React from 'react'
import StrategicTable from './tablesforms/StrategicTable'
import StrategicTable2 from './tablesforms/StrategicTable2'
import { Outlet } from 'react-router-dom'


const StrategicSec = () => {
  return (
    <div>
        <h4>StrategicSec</h4>

    <StrategicTable/>
    <StrategicTable2/>

    <Outlet/>
    

    </div>

  )
}

export default StrategicSec