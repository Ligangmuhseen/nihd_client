import React from 'react'
import MessageTable from './tablesforms/MessageTable'
import { Outlet } from 'react-router-dom'

const MessageSec = () => {
  return (
    <div>
        <h3>MessageSec</h3>

        <MessageTable/>

        <Outlet/>

        




    </div>
  )
}

export default MessageSec