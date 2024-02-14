import React from 'react';
import {aboutimgjpg,aboutimgpng,client1,client2,favicon,herobg,next,prev,s1,s2,s3,sliderbg,sliderimg,team1,team2,team3,team4,trackbg,w1,w2,w3,w4} from "./assets/images/index";

//CSS
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./assets/css/font-awesome.min.css";
//JS
import "bootstrap/dist/js/bootstrap";
import Info from './components/info';
import Client from './components/client';
import About from './components/about';
import Header from './components/header';




const Inves=() =>{
    return(
        <>
        <div className="hero_area">
          <div className="hero_bg_box">
            <div className="bg_img_box">
              <img src={herobg} alt="" />
            </div>
          </div>
          {/* header section strats */}
          <Header/>
          {/* end header section */}
          {/* slider section */}
          <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Crypto <br />
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum
                      eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                      earum suscipit fugiat molestias, veniam, vel architecto
                      veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href="/investorRegistration" className="btn1">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={sliderimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
          {/* end slider section */}
        </div>
        {/* service section */}
        <section className="service_section layout_padding">
          <div className="service_container">
            <div className="container ">
              <div className="heading_container heading_center">
                <h2>
                  Our <span>Services</span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Currency Wallet</h5>
                      <p>
                        fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using
                      </p>
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s2} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Security Storage</h5>
                      <p>
                        fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using
                      </p>
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s3} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Expert Support</h5>
                      <p>
                        fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using
                      </p>
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="">View All</a>
              </div>
            </div>
          </div>
        </section>
        {/* end service section */}
        {/* about section */}
        <About/>
        {/* end about section */}
        {/* why section */}
        <section className="why_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Why Choose <span>Us</span>
              </h2>
            </div>
            <div className="why_container">
              <div className="box">
                <div className="img-box">
                  <img src={w1} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Expert Management</h5>
                  <p>
                    Incidunt odit rerum tenetur alias architecto asperiores omnis
                    cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                    laborum dolores quod nisi vitae voluptate ipsa? In tempore
                    voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                    nesciunt ut veniam, nemo officia ullam repudiandae repellat
                    veritatis unde reiciendis possimus animi autem natus
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={w2} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Secure Investment</h5>
                  <p>
                    Incidunt odit rerum tenetur alias architecto asperiores omnis
                    cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                    laborum dolores quod nisi vitae voluptate ipsa? In tempore
                    voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                    nesciunt ut veniam, nemo officia ullam repudiandae repellat
                    veritatis unde reiciendis possimus animi autem natus
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={w3} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Instant Trading</h5>
                  <p>
                    Incidunt odit rerum tenetur alias architecto asperiores omnis
                    cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                    laborum dolores quod nisi vitae voluptate ipsa? In tempore
                    voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                    nesciunt ut veniam, nemo officia ullam repudiandae repellat
                    veritatis unde reiciendis possimus animi autem natus
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={w4} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Happy Customers</h5>
                  <p>
                    Incidunt odit rerum tenetur alias architecto asperiores omnis
                    cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                    laborum dolores quod nisi vitae voluptate ipsa? In tempore
                    voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                    nesciunt ut veniam, nemo officia ullam repudiandae repellat
                    veritatis unde reiciendis possimus animi autem natus
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">Read More</a>
            </div>
          </div>
        </section>
        {/* end why section */}
        {/* team section */}
        <section className="team_section layout_padding">
          <div className="container-fluid">
            <div className="heading_container heading_center">
              <h2 className="">
                Our <span> Team</span>
              </h2>
            </div>
            <div className="team_container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="box ">
                    <div className="img-box">
                      <img src={team1} className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Joseph Brown</h5>
                      <p>Marketing Head</p>
                    </div>
                    <div className="social_box">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box ">
                    <div className="img-box">
                      <img src={team2} className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Nancy White</h5>
                      <p>Marketing Head</p>
                    </div>
                    <div className="social_box">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box ">
                    <div className="img-box">
                      <img src={team3} className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Earl Martinez</h5>
                      <p>Marketing Head</p>
                    </div>
                    <div className="social_box">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box ">
                    <div className="img-box">
                      <img src={team4} className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Josephine Allard</h5>
                      <p>Marketing Head</p>
                    </div>
                    <div className="social_box">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Client />
        <Info/>
      </>
      
    );
};
export default Inves;