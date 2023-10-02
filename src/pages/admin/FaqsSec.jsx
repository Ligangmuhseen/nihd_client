import React from 'react'
import Faqstable from './tablesforms/Faqstable'
import { Outlet } from 'react-router-dom'

const FaqsSec = () => {
  return (
    <div>
      <h1>frequently asked questions section</h1>
      <Outlet/>
      <Faqstable/>
    </div>
  )
}

export default FaqsSec