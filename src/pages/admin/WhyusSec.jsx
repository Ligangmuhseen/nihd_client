import React from 'react'
import WhyusTable1 from './tablesforms/WhyusTable1'
import WhyusTable2 from './tablesforms/WhyusTable2'
import { Outlet } from 'react-router-dom'


const WhyusSec = () => {
  return (
    <div>WhyusSec

      <WhyusTable1/><br/><br/><br/><br/>
      <Outlet/>
 
      <WhyusTable2/>
    </div>
  )
}

export default WhyusSec