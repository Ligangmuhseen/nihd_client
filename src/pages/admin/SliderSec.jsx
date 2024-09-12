import React from 'react'
import SliderTable from './tablesforms/SliderTable'
import { Outlet } from 'react-router-dom'

const SliderSec = () => {
  return (
    <div>
      <SliderTable/>
      <Outlet/>
    </div>
  )
}

export default SliderSec