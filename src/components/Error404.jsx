import React from 'react'
import { Link } from 'react-router-dom'
import "../error.css"



const Error404 = () => {
  return (
    <div>


<main>
    <div class="container">

      <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link to="/"><button className='btn btn-success'>Back To Home</button></Link>
       
        
      </section>

    </div>
  </main>

  









    </div>
  )
}

export default Error404