import React from 'react'
import InboxTable from './tablesforms/InboxTable'
import { Outlet } from 'react-router-dom'

const InboxSec = () => {
  return (
    <div>
        <h4 style={{color:"green"}}> User Messages</h4>

        <InboxTable/>

        <Outlet/>

        




    </div>
  )
}

export default InboxSec