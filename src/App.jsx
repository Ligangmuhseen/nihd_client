import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import User from './components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import AboutSec from './pages/admin/AboutSec';
import FaqsSec from './pages/admin/FaqsSec';
import GallerySec from './pages/admin/GallerySec';
import HeroSec from './pages/admin/HeroSec';
import ServiceSec from './pages/admin/ServiceSec';
import TestimonialSec from './pages/admin/TestimonialSec';
import WhyusSec from './pages/admin/WhyusSec';
import AbMainForm from './pages/admin/tablesforms/modals/AbMainForm';
import AbMainForm2 from './pages/admin/tablesforms/modals/AbMainForm2';
import AbMainForm3 from './pages/admin/tablesforms/modals/AbMainForm3';
import AbMainForm4 from './pages/admin/tablesforms/modals/AbMainForm4';
import FaqsForm from './pages/admin/tablesforms/modals/FaqsForm';
import FaqsForm2 from './pages/admin/tablesforms/modals/FaqsForm2';
import FaqsForm3 from './pages/admin/tablesforms/modals/FaqsForm3';
import WhyusForm from './pages/admin/tablesforms/modals/WhyusForm';
import GalleryForm from './pages/admin/tablesforms/modals/GalleryForm';
import GalleryForm2 from './pages/admin/tablesforms/modals/GalleryForm2';
import GalleryForm3 from './pages/admin/tablesforms/modals/GalleryForm3';

import TestimonialsForm from './pages/admin/tablesforms/modals/TestimonialsForm';
import Testimonials2Form from './pages/admin/tablesforms/modals/Testimonials2Form';
import Testimonials3Form from './pages/admin/tablesforms/modals/Testimonials3Form';

import ServiceForm from './pages/admin/tablesforms/modals/ServiceForm';
import ServiceForm2 from './pages/admin/tablesforms/modals/ServiceForm2';
import ServiceForm3 from './pages/admin/tablesforms/modals/ServiceForm3';
import HeroForm from './pages/admin/tablesforms/modals/HeroForm';



function App() {


  return (


    <>
      <Router>
        <Routes>

          <Route path="/" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminSidebar />}>
            <Route path="" element={<AboutSec />} >

              <Route path="aboutform" element={<AbMainForm />} />
              <Route path="aboutform2" element={<AbMainForm2 />} />
              <Route path="aboutform3" element={<AbMainForm3 />} />
              <Route path="aboutform4" element={<AbMainForm4 />} />

            </Route>

            <Route path="faqssec" element={<FaqsSec />} >

              <Route path="faqsform" element={<FaqsForm />} />
              <Route path="faqsform2" element={<FaqsForm2 />} />
              <Route path="faqsform3" element={<FaqsForm3 />} />



            </Route>

            <Route path="herosec" element={<HeroSec />} >

            <Route path="heroform" element={<HeroForm />} />

            </Route>


            <Route path="testimonialsec" element={<TestimonialSec />} >
              <Route path="testimonialsform" element={<TestimonialsForm />} />
              <Route path="testimonialsform2" element={<Testimonials2Form />} />
              <Route path="testimonialsform3" element={<Testimonials3Form />} />



            </Route>
            <Route path="servicesec" element={<ServiceSec />} >
              <Route path="serviceform" element={<ServiceForm/>} />
              <Route path="serviceform2" element={<ServiceForm2/>} />
              <Route path="serviceform3" element={ <ServiceForm3/>} />


            </Route>

            <Route path="whyussec" element={<WhyusSec />} >

              <Route path="whyusform" element={<WhyusForm />} />

            </Route>
            <Route path="gallerysec" element={<GallerySec />} >
              <Route path="galleryform" element={<GalleryForm />} />
              <Route path="galleryform2" element={<GalleryForm2 />} />
              <Route path="galleryform3" element={<GalleryForm3 />} />


            </Route>


          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
