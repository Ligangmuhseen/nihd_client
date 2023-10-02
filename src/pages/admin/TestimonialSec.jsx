import React from 'react'
import TestimonialTable from './tablesforms/TestimonialTable'
import { Outlet } from 'react-router-dom'

const TestimonialSec = () => {
  return (
    <div>TestimonialSec
      <TestimonialTable/>
      <Outlet/>
    </div>
  )
}

export default TestimonialSec