import React from 'react'
import { Outlet } from 'react-router-dom'
import SecurityTable from './tablesforms/SecurityTable'

const SecuritySec = () => {
  return (
    <div>
      <SecurityTable/>
      <Outlet/>




    </div>
  )
}

export default SecuritySec