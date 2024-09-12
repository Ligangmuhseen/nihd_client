import React from 'react'
import { Outlet } from 'react-router-dom'
import UserManagementTable from './tablesforms/UserManagementTable'

const UserManagement = () => {
  return (
    <div>
        <UserManagementTable/>
        <Outlet/>

    </div>
  )
}

export default UserManagement