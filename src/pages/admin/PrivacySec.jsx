import React from 'react'
import { Outlet } from 'react-router-dom'
import PrivacyTable from './tablesforms/PrivacyTable'

const PrivacySec = () => {
  return (
    <div>
        <PrivacyTable/>
        <Outlet/>

    </div>
  )
}

export default PrivacySec