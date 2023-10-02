import React from "react";
import Topbar from "../pages/client/Topbar";
import Header from "../pages/client/Header";
import Herosection from "../pages/client/Herosection";
import Whyus from "../pages/client/Whyus";
import About from "../pages/client/About";
import Service from "../pages/client/ServiceSection";
import Faqs from "../pages/client/Faqs";
import Testimonial from "../pages/client/Testimonial";
import Gallery from "../pages/client/Gallery";
import Contact from "../pages/client/Contact";
import UpButton from "../pages/client/UpButton";
import FooterComponent from "../pages/client/FooterComponent";
import Management from "../pages/client/Management";
import CustomScriptComponent from "../pages/client/CustomScriptComponent";
import Product from "../pages/client/Product";


const User = () => {
    return (
        <>
            <CustomScriptComponent/>


            <Topbar />
            <Header />
            <Herosection />



            <main id="main">

                <Whyus />
                <About />
                <Product/>
                <Service />
                <Management/>
                <Faqs />
                <Testimonial />
                <Gallery />
                <Contact />




            </main>

            <FooterComponent />
            <UpButton />











        </>
    );
}

export default User