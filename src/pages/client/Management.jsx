import React from 'react'
// import testimonials1 from "../../UserAssets/img/testimonials/testimonials-1.jpg";
import amri from "./leader/amri.jpeg"
import issa from "./leader/issa.jpeg"
import zuena from "./leader/zuena.jpeg"
import Header from './Header';
import FooterComponent from "./FooterComponent";
import Topbar from './Topbar';

const Management = () => {
    return (
        <div>
            <Topbar/>
            <Header/>



            {/* <!-- ======= Doctors Section ======= --> */}
            <main id="main" style={{paddingTop:"80px"}}>
            <section id="management" className="doctors">
                <div className="container">

                    <div className="section-title">
                        <h2>Uongozi</h2>
                        <h3>Bodi ya Usimamizi</h3>
                        <p  style={{ textAlign: "justify", textJustify: "inter-word" }}>Sehemu yetu ya Usimamizi ndio lango lako la kufahamiana na wataalamu waliojitolea ambao huongoza na kuunda maono ya shirika letu na huduma za afya. Hapa, utapata wasifu na wasifu wa kina wa viongozi wetu wanaoheshimiwa, ikijumuisha timu yetu ya watendaji, wakurugenzi wa matibabu, na wakuu wa idara.</p>
                    </div>



                   

                    <div className="row">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member d-grid align-items-start mt-2" style={{backgroundColor:"#d5e1f3"}}>
                                <div className="pic"><img src={amri}  className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <br/>
                                    <h4>Amri Budi</h4>
                                    <span>Mwenyekiti wa Bodi ya usimamizi na idara ya utengenezaji dawa, Mjumbe wa Bodi ya Maendeleo ya kimkakati</span>
                                    
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member d-grid align-items-start mt-2" style={{backgroundColor:"#d5e1f3"}}>
                                <div className="pic"><img src={zuena}  className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <div style={{marginTop:"55px", position:"relative", bottom:"25px"}}>
                                    <h4>Zuena Mussa</h4>
                                    <span>Afisa mtendaji mkuu, Mjumbe wa Bodi na mkuu wa fedha</span>

                                    </div>
                                   
                                    
                                

                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
                            <div className="member d-grid align-items-start mt-2" style={{backgroundColor:"#d5e1f3"}}>
                                <div className="pic"><img src={issa} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <div style={{marginTop:"20px"}}>
                                    <h4>Issa Swedi</h4>
                                    <span>Afisa mkuu wa Biashara na udhibiti, Mjumbe wa Bodi ya fedha, mauzo na masoko</span>

                                    </div>
                                    
                                   
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            </main>




        <FooterComponent/>
        </div>
    )
}

export default Management