import React from 'react'
import testimonials1 from "../../UserAssets/img/testimonials/testimonials-1.jpg";

const Management = () => {
    return (
        <div>



            {/* <!-- ======= Doctors Section ======= --> */}
            <section id="doctors" class="doctors">
                <div class="container">

                    <div class="section-title">
                        <h2>Management</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>



                   

                    <div class="row">

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div class="member d-grid align-items-start">
                                <div class="pic"><img src={testimonials1}  class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Amri Budi</h4>
                                    <span>Chairperson of Management Board and Pharmaceutical manufacturing department , Board Member for strategic Development</span>
                                    
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div class="member d-grid align-items-start">
                                <div class="pic"><img src={testimonials1}  class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Zuena Mussa</h4>
                                    <span>Chief Executive Officer, Board Member and head of finance</span>
                                    
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div class="member d-grid align-items-start">
                                <div class="pic"><img src={testimonials1} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Issa Swedi</h4>
                                    <span>Chief Business Officer and Controlling, Board Member for Finance, Sales and Marketing</span>
                                   
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>





        </div>
    )
}

export default Management