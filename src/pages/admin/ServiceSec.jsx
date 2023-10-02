import React from 'react'
import ServiceTable from './tablesforms/ServiceTable'
import { Outlet } from 'react-router-dom'

const ServiceSec = () => {
  return (
    <div>
      <ServiceTable/>
      <Outlet/>
    </div>
  )
}

export default ServiceSec