import React from 'react'
import { Outlet } from 'react-router-dom'
import VideoTable from './tablesforms/VideoTable'

const VideoSec = () => {
  return (
    <div>
      <VideoTable/>
      <Outlet/>




    </div>
  )
}

export default VideoSec