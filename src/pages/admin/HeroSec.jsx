import React from 'react'
import HeroTable from './tablesforms/HeroTable'
import { Outlet } from 'react-router-dom'

const HeroSec = () => {
  return (
    <div>Hero Section
      <HeroTable/>
      <Outlet/>
    </div>
  )
}

export default HeroSec