import React, { useState } from "react";

import AdminSidebar from "../components/AdminSidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import AboutSec from "../pages/admin/AboutSec";
import FaqsSec from "../pages/admin/FaqsSec";
import GallerySec from "../pages/admin/GallerySec";
import HeroSec from "../pages/admin/HeroSec";
import ServiceSec from "../pages/admin/ServiceSec";
import TestimonialSec from "../pages/admin/TestimonialSec";
import ProductSec from "../pages/admin/ProductSec";

import WhyusSec from "../pages/admin/WhyusSec";
import AbMainForm from "../pages/admin/tablesforms/modals/AbMainForm";
import AbMainForm2 from "../pages/admin/tablesforms/modals/AbMainForm2";
import AbMainForm3 from "../pages/admin/tablesforms/modals/AbMainForm3";
import AbMainForm4 from "../pages/admin/tablesforms/modals/AbMainForm4";
import FaqsForm from "../pages/admin/tablesforms/modals/FaqsForm";
import FaqsForm2 from "../pages/admin/tablesforms/modals/FaqsForm2";
import FaqsForm3 from "../pages/admin/tablesforms/modals/FaqsForm3";
import WhyusForm from "../pages/admin/tablesforms/modals/WhyusForm";
import WhyusForm2 from "../pages/admin/tablesforms/modals/WhyusForm2";
import GalleryForm from "../pages/admin/tablesforms/modals/GalleryForm";
import GalleryForm2 from "../pages/admin/tablesforms/modals/GalleryForm2";
import GalleryForm3 from "../pages/admin/tablesforms/modals/GalleryForm3";

import TestimonialsForm from "../pages/admin/tablesforms/modals/TestimonialsForm";
import Testimonials2Form from "../pages/admin/tablesforms/modals/Testimonials2Form";
import Testimonials3Form from "../pages/admin/tablesforms/modals/Testimonials3Form";

import HealthForm from "../pages/admin/tablesforms/modals/HealthForm";
import HealthForm2 from "../pages/admin/tablesforms/modals/HealthForm2";
import HealthForm3 from "../pages/admin/tablesforms/modals/HealthForm3";

import ServiceForm from "../pages/admin/tablesforms/modals/ServiceForm";
import ServiceForm2 from "../pages/admin/tablesforms/modals/ServiceForm2";
import ServiceForm3 from "../pages/admin/tablesforms/modals/ServiceForm3";
import HeroForm from "../pages/admin/tablesforms/modals/HeroForm";

import ProductForm from "../pages/admin/tablesforms/modals/ProductForm";
import ProductForm2 from "../pages/admin/tablesforms/modals/ProductForm2";
import ProductForm3 from "../pages/admin/tablesforms/modals/ProductForm3";

import PrivacySec from "../pages/admin/PrivacySec";

import PrivacyForm from "../pages/admin/tablesforms/modals/PrivacyForm";

import SecuritySec from "../pages/admin/SecuritySec";

import SecurityForm from "../pages/admin/tablesforms/modals/SecurityForm";

import PrivateRoutes from "../utils/PrivateRoutes";

import Therapeutics from "../pages/client/strategicareacomponents/Therapeutics";
import ConsumerHealth from "../pages/client/strategicareacomponents/ConsumerHealth";

import Error404 from "../components/Error404";

import StrategicSec from "../pages/admin/StrategicSec";
import StrategicForm from "../pages/admin/tablesforms/modals/StrategicForm";
import StrategicForm2 from "../pages/admin/tablesforms/modals/StrategicForm2";
import MessageSec from "../pages/admin/MessageSec";
import MessageForm from "../pages/admin/tablesforms/modals/MessageForm";
import MessageForm2 from "../pages/admin/tablesforms/modals/MessageForm2";
import MessageForm3 from "../pages/admin/tablesforms/modals/MessageForm3";
import About from "../pages/client/About";
import Herosection from "../pages/client/Herosection";
import ServiceSection from "../pages/client/ServiceSection";
import Testimonial from "../pages/client/Testimonial";
import Gallery from "../pages/client/Gallery";
import Message from "../pages/client/Message";
import Product2 from "../pages/client/Product2";
import Management from "../pages/client/Management";
import Contact from "../pages/client/Contact";
import Faqs from "../pages/client/Faqs";
import Privacy from "../pages/client/Privacy";
import Security from "../pages/client/Security";
import Partnership from "../pages/client/Partnership";
import Axial1 from "../pages/client/Axial1";
import Axial2 from "../pages/client/Axial2";
import Vitality from "../pages/client/Vitality";
import Diaxial4 from "../pages/client/Diaxial4";
import Inhibitor from "../pages/client/Inhibitor";
import Activator from "../pages/client/Activator";
import Diaxial3 from "../pages/client/Diaxial3";
import SocietyForm from "../pages/client/SocietyForm";
import SliderSec from "../pages/admin/SliderSec";
import SliderForm from "../pages/admin/tablesforms/modals/SliderForm";
import SliderForm2 from "../pages/admin/tablesforms/modals/SliderForm2";
import SliderForm3 from "../pages/admin/tablesforms/modals/SliderForm3";
import Readmore from "../pages/client/Readmore";
import UserManagement from "../pages/admin/UserManagement";
import UserManagementForm from "../pages/admin/tablesforms/modals/UserManagementForm";
import UserManagementForm2 from "../pages/admin/tablesforms/modals/UserManagementForm2";
import UserManagementForm3 from "../pages/admin/tablesforms/modals/UserManagementForm3";
import InboxSec from "../pages/admin/InboxSec";
import InboxForm from "../pages/admin/tablesforms/modals/InboxForm";
import SheriaUbia from "../pages/client/SheriaUbia";
import MwenzaUbia from "../pages/client/MwenzaUbia";
import Booster from "../pages/client/Booster";
import VideoForm from "../pages/admin/tablesforms/modals/VideoForm";
import VideoSec from "../pages/admin/VideoSec";




const MyRoutes = () => {
  const [auth, setAuth] = useState({
    token: !!localStorage.getItem("authToken"),
  });

  const [inboxCount, setInboxCount] = useState(0);

  const addInboxCount = () => {
    setInboxCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Herosection />} />
          <Route path="about" element={<About />} />
          <Route path="management" element={<Management />} />
          <Route path="product" element={<Product2 />} />
          <Route path="service" element={<ServiceSection />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="societyform-2" element={<Message />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="therapeutics" element={<Therapeutics />} />
          <Route path="consumerhealth" element={<ConsumerHealth />} />
          <Route path="readmore" element={<Readmore />} />

          <Route path="privacy" element={<Privacy />} />
          <Route path="security" element={<Security />} />
          <Route path="partnership" element={<Partnership />} />

          <Route path="societyform-1" element={<ServiceSection />} />
          <Route path="modal-2" element={<Axial1 />} />
          <Route path="modal-1" element={<Axial2 />} />
          <Route path="modal-3" element={<Activator />} />
          <Route path="modal-7" element={<Inhibitor />} />
          <Route path="modal-8" element={<Booster />} />
          <Route path="modal-5" element={<Vitality />} />
          <Route path="modal-6" element={<Diaxial4 />} />
          <Route path="modal-4" element={<Diaxial3 />} />
          <Route path="sheriaubia" element={<SheriaUbia />} />
          <Route path="mwenzaubia" element={<MwenzaUbia />} />


          <Route path="login" element={<Login setAuth={setAuth} />} />
          <Route
            path="societyform-3"
            element={
             
                <SocietyForm />
           
            }
          />
          <Route element={<PrivateRoutes />}>
            <Route
              path="admin"
              element={
             
                  <AdminSidebar />
              
              }
            >
              <Route path="" element={<AboutSec />}>
                <Route path="aboutform" element={<AbMainForm />} />
                <Route path="aboutform2/:id" element={<AbMainForm2 />} />
                <Route path="aboutform3/:id" element={<AbMainForm3 />} />
                <Route path="aboutform4/:id" element={<AbMainForm4 />} />
                <Route path="healthform" element={<HealthForm />} />
                <Route path="healthform2/:id" element={<HealthForm2 />} />
                <Route path="healthform3/:id" element={<HealthForm3 />} />
              </Route>

              <Route path="faqssec" element={<FaqsSec />}>
                <Route path="faqsform" element={<FaqsForm />} />
                <Route path="faqsform2/:id" element={<FaqsForm2 />} />
                <Route path="faqsform3/:id" element={<FaqsForm3 />} />
              </Route>

              <Route path="herosec" element={<HeroSec />}>
                <Route path="heroform/:id" element={<HeroForm />} />
              </Route>
              <Route path="productsec" element={<ProductSec />}>
                <Route path="productform" element={<ProductForm />} />
                <Route path="productform2/:id" element={<ProductForm2 />} />
                <Route path="productform3/:id" element={<ProductForm3 />} />
              </Route>

              <Route path="testimonialsec" element={<TestimonialSec />}>
                <Route path="testimonialsform" element={<TestimonialsForm />} />
                <Route
                  path="testimonialsform2/:id"
                  element={<Testimonials2Form />}
                />
                <Route
                  path="testimonialsform3/:id"
                  element={<Testimonials3Form />}
                />
              </Route>

              <Route path="heroslidersec" element={<SliderSec />}>
                <Route path="herosliderform" element={<SliderForm />} />
                <Route path="herosliderform2/:id" element={<SliderForm2 />} />
                <Route path="herosliderform3/:id" element={<SliderForm3 />} />
              </Route>

              <Route path="inboxsec" element={<InboxSec />}>
                <Route path="inboxform/:id" element={<InboxForm />} />
              </Route>

              <Route path="servicesec" element={<ServiceSec />}>
                <Route path="serviceform" element={<ServiceForm />} />
                <Route path="serviceform2/:id" element={<ServiceForm2 />} />
                <Route path="serviceform3/:id" element={<ServiceForm3 />} />
              </Route>

              <Route path="usersec" element={<UserManagement />}>
                <Route path="userform" element={<UserManagementForm />} />
                <Route path="userform2/:id" element={<UserManagementForm2 />} />
                <Route path="userform3/:id" element={<UserManagementForm3 />} />
              </Route>

              <Route path="whyussec" element={<WhyusSec />}>
                <Route path="whyusform/:id" element={<WhyusForm />} />
                <Route path="whyusform2/:id" element={<WhyusForm2 />} />
              </Route>

              <Route path="privacysec" element={<PrivacySec />}>
                <Route path="privacyform/:id" element={<PrivacyForm />} />
              </Route>

              <Route path="securitysec" element={<SecuritySec />}>
                <Route path="securityform/:id" element={<SecurityForm />} />
              </Route>

              <Route path="videosec" element={<VideoSec />}>
                <Route path="videoform/:id" element={<VideoForm />} />
              </Route>

              <Route path="messagesec" element={<MessageSec />}>
                <Route path="messageform" element={<MessageForm />} />
                <Route path="messageform2/:id" element={<MessageForm2 />} />
                <Route path="messageform3/:id" element={<MessageForm3 />} />
              </Route>

              <Route path="strategicsec" element={<StrategicSec />}>
                <Route path="strategicform/:id" element={<StrategicForm />} />
                <Route path="strategicform2/:id" element={<StrategicForm2 />} />
              </Route>

              <Route path="gallerysec" element={<GallerySec />}>
                <Route path="galleryform" element={<GalleryForm />} />
                <Route path="galleryform2/:id" element={<GalleryForm2 />} />
                <Route path="galleryform3/:id" element={<GalleryForm3 />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MyRoutes;
