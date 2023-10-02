import React from 'react'
import GalleryTable from './tablesforms/GalleryTable'
import { Outlet } from 'react-router-dom'

const GallerySec = () => {
  return (
    <div>
      <GalleryTable/>
      <Outlet/>
    </div>
  )
}

export default GallerySec