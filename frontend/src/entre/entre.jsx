import React, { useEffect } from 'react';
import {aboutbg,abouticon1,abouticon2,abouticon3,aboutleft,aboutsharp,bg,blog3,bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,clog1,clog2,clog3,clog4,clog5,carousel2,documentationbg,fabicon,flag1,flag2,flag3,flag4,flag5,group1,
  initialbg,liveshape,logocbottom,logotop,mobile,roadmap1,roadmap2,roadmap4,roadmap5,superman1,superman2,superman3,superman4,
  superman5,superman6,superman7,superman8,tokenbottom,tokentop,welcomeimg} from "./assets/img/index";

import "jquery/dist/jquery";
import 'animate.css';
import OwlCarousel from 'react-owl-carousel';
import 'wowjs/css/libs/animate.css';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

//CSS
import "owl.carousel/dist/assets/owl.carousel.css";
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "animate.css/animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "slicknav/dist/slicknav.css";
import "animate.css/animate.min.css";
import "material-design-iconic-font/dist/css/material-design-iconic-font.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/font-awesome.min.css"

//JS
import "@popperjs/core/dist/cjs/popper";
import "bootstrap/dist/js/bootstrap";
import "slicknav/dist/jquery.slicknav";
import "wowjs/dist/wow";
import "owl.carousel/dist/owl.carousel";
import "skrollr/dist/skrollr.min.js";




//import 'skrollr';
//import 'particles.js';
//import part from "./particles-config.json";
/*import "./assets/css/animate.min.css";
import "./assets/css/animation.css";
import "animate.css/animate.css";
import "animate.css/animate.min.css";*/



const logo_carousel = {
      loop:true,
        nav:false,
        margin:30,
        autoplay:true,
        autoplayspeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
};

const roadmap_carousel={
  loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
}


const faq_carousel={
  loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
}


    
    const Entre = () => {
      useEffect(() => {
        // Owl Carousel Initialization

        if (window.$) {
          console.log('jQuery is loaded and accessible.');
        } else {
          console.error('jQuery is not loaded or accessible.');
        }
        const countDownDate = new Date('Sep 5, 2024 15:37:25').getTime();

        // Update the count down every 1 second
        const x = setInterval(function () {
          const now = new Date().getTime();
          const distance = countDownDate - now;
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
          document.getElementById('days').innerHTML = days;
          document.getElementById('hours').innerHTML = hours;
          document.getElementById('minutes').innerHTML = minutes;
          document.getElementById('seconds').innerHTML = seconds;
    
          if (distance < 0) {
            clearInterval(x);
            document.getElementById('counter').innerHTML = 'EXPIRED';
          }
        }, 1000);
        document.body.className = 'entrebody';

        // Optionally, you can remove the class when the component unmounts
      }, []);
      const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return(
    <>
    <div
      className="header-area wow fadeInDown header-absolate"
      id="nav"
      data-0="position:fixed;"
      data-top-top="position:fixed;top:0;"
      data-edge-strategy="set"
    >
      <div className="container">
        <div className="row">
          <div className="col-4 d-block d-lg-none">
            <div className="mobile-menu" />
          </div>
          <div className="col-4 col-lg-2">
            <div className="logo-area">
              <a href="#">
                <img src={logotop} alt="" />
              </a>
            </div>
          </div>
          <div className="col-4 col-lg-8 d-none d-lg-block">
            <div className="main-menu text-center">
              <nav>
                <ul id="slick-nav">
                  <li>
                    <a className="scroll" href="#home">
                      home
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Version 1</a>
                      </li>
                      <li>
                        <a href="index2.html">Version 2</a>
                      </li>
                      <li>
                        <a href="blog.html">blog</a>
                      </li>
                      <li>
                        <a href="single-blog.html">single blog</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#Paper">
                      White Paper
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#token">
                      Token Sale
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#apps">
                      APP
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4 col-lg-2 text-right">
            <a href="/entrereg" className="logibtn gradient-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*header area end*/}
    {/*welcome area start*/}
    <div className="welcome-area wow fadeInUp" id="home">
    <Particles
            id="particles-js"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: { enable: false, zIndex: 0 },
              "particles": {
                "number": {
                  "value": 66,
                  "density": {
                    "enable": true,
                    "value_area": 1025.908125981517
                  }
                },
                "color": {
                  "value": "#024ADD"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 6
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.3083770200778445,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 8.33451405615796,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 116.68319678621143,
                  "color": "#ffffff",
                  "opacity": 0.35838410441479224,
                  "width": 0.833451405615796
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 1166.8319678621144,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            
            }}
        ></Particles>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-center">
            <div className="welcome-right">
              <div className="welcome-text">
                <h1>
                  Fast Growing ICO Agency for Blockchain Investors and Founders{" "}
                </h1>
                <h4>
                  Sifting through teaspoons of clay and sand scraped from the
                  floors of caves, German researchers have managed.
                </h4>
              </div>
              <div className="welcome-btn">
                <a href="#" className="gradient-btn v2 mr-20">
                  Register for the ICO
                </a>
                <a href="#" className="gradient-btn v2">
                  Download Whitepaper
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="welcome-img">
              <img src={welcomeimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*welcome area end*/}
    {/*about area start*/}
    <div className="about-area wow fadeInUp" id="about">
      <div className="space-30" />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="heading">
              <h5>We are featured in</h5>
            </div>
            <div className="space-30" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel className="logo-carousel owl-carousel text-center" {...logo_carousel}>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog1} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog2} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog3} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog4} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog5} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog3} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog2} alt="" />
                </div>
              </div>
              <div className="single-logo-wrapper">
                <div className="single-item">
                  <img src={clog5} alt="" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="space-90" />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="about-mid-img">
              <img src={aboutleft} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 align-self-center">
            <div className="heading">
              <h5>We are featured in</h5>
            </div>
            <div className="about-mid-text">
              <h1>A Platform for Exchange Cyrptocurrency and shares</h1>
              <div className="space-10" />
              <p>
                Mauna Loa, the biggest volcano on Earth half the Island of Hawaii.
                Just 35 miles to the northeast, Mauna Kea, known to native
                Hawaiians as Mauna a Wakea, rises nearly 14,000 feet above sea
                level. If they are so close together, how did they develop in two
                parallel tracks .Sifting through teaspoons of clay and sand
                scraped from the floors of caves.
              </p>
            </div>
            <div className="space-30" />
            <a href="#" className="gradient-btn v2 about-btn">
              {" "}
              <i className="fa fa-send-o" /> join us on telegraph
            </a>
          </div>
        </div>
      </div>
      <div className="space-90" />
    </div>
    {/*about area end*/}
    {/*single about area start*/}
    <div className="single-about-area wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <a href="#" className="single-about">
              <div className="single-about-img">
                <img src={abouticon1} alt="" />
              </div>
              <div className="single-about-text">
                <h4>Exciting Opportunity</h4>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a not quite tuned in radio station
                  rises and for a while drowns
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="#" className="single-about">
              <div className="single-about-img">
                <img src={abouticon2} alt="" />
              </div>
              <div className="single-about-text">
                <h4>Vetted ICO Marketplace</h4>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a not quite tuned in radio station
                  rises and for a while drowns
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="#" className="single-about">
              <div className="single-about-img">
                <img src={abouticon3} alt="" />
              </div>
              <div className="single-about-text">
                <h4>Diverse Profit Ways</h4>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a not quite tuned in radio station
                  rises and for a while drowns
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="space-90" />
    </div>
    {/*single about area end*/}
    {/*ico area start*/}
    
    {/*ico area end*/}
    {/*Documentation area start*/}
    <div className="section-padding documentation-area wow fadeInUp" id="Paper">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="heading">
              <h5>Whitepaper</h5>
              <div className="space-10" />
              <h1>Download Documentation</h1>
            </div>
            <div className="space-60" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 col-lg">
            <div className="single-document">
              <div className="document-flag">
                <img src={flag1} alt="" />
              </div>
              <button className="single-document-text">
                <span>English</span>
              </button>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-document">
              <div className="document-flag">
                <img src={flag2} alt="" />
              </div>
              <button className="single-document-text">
                <span>Spanish</span>
              </button>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-document">
              <div className="document-flag">
                <img src={flag3} alt="" />
              </div>
              <button className="single-document-text">
                <span>Russian</span>
              </button>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-document">
              <div className="document-flag">
                <img src={flag4} alt="" />
              </div>
              <button className="single-document-text">
                <span>Arabic</span>
              </button>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-document">
              <div className="document-flag">
                <img src={flag5} alt="" />
              </div>
              <button className="single-document-text">
                <span>Portuguese</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Documentation area end*/}
    {/*distibution-bg start*/}
    <div className="distibution-bg">
      {/*-distibution area start*/}
      <div className="distibution wow fadeInUp" id="token">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>Token Distribution</h5>
                <div className="space-10" />
                <h1>initial distibution</h1>
              </div>
              <div className="space-60" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-right">
              <div className="distibution-svg distibution-svg-1">
                <img src={tokentop} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="distibution-d item-1">
                <ul>
                  <li className="distibution-list-1">
                    <span>15% </span>Build Up Team
                  </li>
                  <li className="distibution-list-2">
                    <span>50% </span>ICO Investors
                  </li>
                  <li className="distibution-list-3">
                    <span>25% </span>Branding &amp; Marketing
                  </li>
                  <li className="distibution-list-4">
                    <span>10% </span>Bounty{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-90" />
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>Sale breakdown</h5>
                <div className="space-10" />
                <h1>Token Sales Contribution</h1>
              </div>
              <div className="space-90" />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-right">
              <div className="distibution-d distibution-d-2">
                <ul>
                  <li className="distibution-list-5">
                    <span>40% </span>HR &amp; Development
                  </li>
                  <li className="distibution-list-6">
                    <span>30% </span>Branding &amp; Markting
                  </li>
                  <li className="distibution-list-7">
                    <span>20% </span>Posiblle Buyout
                  </li>
                  <li className="distibution-list-8">
                    <span>10% </span>Legal Advisory{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-10">
              <div className="distibution-svg distibution-svg-2">
                <img src={tokenbottom} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-90" />
      </div>
      {/*-distibution area end*/}
    </div>
    {/*distibution-bg end*/}
    {/*roadmap area start*/}
    <div className="roadmap-area section-padding wow fadeInUp" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="heading">
              <h5>history Timeline</h5>
              <div className="space-10" />
              <h1>Development Roadmap</h1>
            </div>
            <div className="space-60 d-none d-sm-block" />
          </div>
        </div>
      </div>
      <div className="container">
        <OwlCarousel className="roadmap-carousel owl-carousel" {...roadmap_carousel}>
          <div className="roadmap-item">
            <div className="single-roadmap text-center road-left">
              <div className="single-roadmap-img">
                <img src={roadmap1} alt="" />
              </div>
              <div className="space-30" />
              <div className="roadmap-text">
                <p>01.03.2017</p>
                <div className="space-10" />
                <h5>Concept and whitepaper</h5>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a in token.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-item align-self-center">
            <div className="single-roadmap road-right">
              <div className="row">
                <div className="col-5 align-self-center">
                  <div className="single-roadmap-img">
                    <img src={roadmap2} alt="" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="roadmap-text">
                    <p>21.06 .2017</p>
                    <h5>Recruitment of Our team</h5>
                    <p>
                      The recording starts with the patter of a summer squall.
                      Later, a drifting tone like that of a in token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="single-roadmap text-center road-left">
              <div className="single-roadmap-img">
                <img src={roadmap4} alt="" />
              </div>
              <div className="space-30" />
              <div className="roadmap-text">
                <p>31.08.2017</p>
                <div className="space-10" />
                <h5>Core Development</h5>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a in token.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-item align-self-center">
            <div className="single-roadmap road-right">
              <div className="row">
                <div className="col-5 align-self-center">
                  <div className="single-roadmap-img">
                    <img src={roadmap5} alt="" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="roadmap-text">
                    <p>31.11.2017</p>
                    <h5>Main Development</h5>
                    <p>
                      The recording starts with the patter of a summer squall.
                      Later, a drifting tone like that of a in token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="single-roadmap text-center road-left">
              <div className="single-roadmap-img">
                <img src={roadmap4} alt="" />
              </div>
              <div className="space-30" />
              <div className="roadmap-text">
                <p>31.08.2017</p>
                <div className="space-10" />
                <h5>Core Development</h5>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a in token.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-item align-self-center">
            <div className="single-roadmap road-right">
              <div className="row">
                <div className="col-5 align-self-center">
                  <div className="single-roadmap-img">
                    <img src={roadmap5} alt="" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="roadmap-text">
                    <p>31.11.2017</p>
                    <h5>Main Development</h5>
                    <p>
                      The recording starts with the patter of a summer squall.
                      Later, a drifting tone like that of a in token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
    {/*roadmap area end*/}
    {/*team-bg*/}
    <div className="team-bg">
      {/*team area start*/}
      <div className="team-area wow fadeInUp section-padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>core team</h5>
                <div className="space-10" />
                <h1>Our Superman</h1>
              </div>
              <div className="space-60" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman1} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>William Delisle</h3>
                  <div className="space-10" />
                  <h6>FOUNDER &amp; CEO</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman2} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Julius Book</h3>
                  <div className="space-10" />
                  <h6>SOFTWARE ENGINEER</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman6} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Jessica Blair</h3>
                  <div className="space-10" />
                  <h6>MARKETING ANALYST</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman7} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Nancy Burns</h3>
                  <div className="space-10" />
                  <h6>Head of Design</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area team wow fadeInDown">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>Advisory team</h5>
                <div className="space-10" />
                <h1>Advisory Board</h1>
              </div>
              <div className="space-60" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman4} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Tricia Morgan</h3>
                  <div className="space-10" />
                  <h6>ADVISOR</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman5} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Kent Ransom</h3>
                  <div className="space-10" />
                  <h6>ADVISOR</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman6} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Edward Schultz</h3>
                  <div className="space-10" />
                  <h6>ADVISOR</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-team">
                <div className="single-team-img">
                  <img src={superman7} alt="" />
                </div>
                <div className="space-30" />
                <div className="single-team-content">
                  <h3>Betty Cyr</h3>
                  <div className="space-10" />
                  <h6>ADVISOR</h6>
                </div>
                <div className="space-10" />
                <div className="single-team-social">
                  <ul>
                    <li>
                      <a className="ico-1" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-2" href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a className="ico-3" href="#">
                        <i className="fa fa-twitter " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-30" />
      </div>
      {/*team area end*/}
      {/*apps area start*/}
      <div className="apps-area wow fadeInUp section-padding" id="apps">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 offset-1 align-self-center">
              <div className="heading">
                <h5>MOBILE APP</h5>
                <div className="space-10" />
                <h1>Track from Anywhere</h1>
                <div className="space-20" />
                <p>
                  Swimming hundreds of feet beneath the ocean’s surface in many
                  parts of the world are prolific architects called giant
                  larvaceans. These zooplankton are not particularly giant
                  themselves but every day, they construct one or more spacious
                  houses that can exceed .{" "}
                </p>
                <p>
                  The recording starts with the patter of a summer squall. Later,
                  a drifting tone like that of a not-quite-tuned-in radio station
                  rises and for a while drowns out the patter.
                </p>
              </div>
              <div className="space-30" />
              <a href="#" className="gradient-btn apps-btn">
                {" "}
                <i className="zmdi zmdi-google-play" />
                Google Playstore
              </a>
              <a href="#" className="gradient-btn apps-btn apps-btn-2">
                {" "}
                <i className="zmdi zmdi-apple" />
                Apple Appstore
              </a>
            </div>
            <div className="col-12 col-lg-5 offset-1">
              <div className="apps-img">
                <img src={mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*apps area end*/}
      {/*faq area start*/}
      <div className="faq-area wow fadeInUp" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>faq</h5>
                <div className="space-10" />
                <h1>Frequently Asked Questions </h1>
              </div>
              <div className="space-60" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="faq-list">
                <ul className="nav nav-pills" id="pills-tab">
                  <li>
                    <a className="active" data-toggle="pill" href="#one">
                      General Questions
                    </a>
                  </li>
                  <li>
                    <a data-toggle="pill" href="#two">
                      ico
                    </a>
                  </li>
                  <li>
                    <a data-toggle="pill" href="#three">
                      token
                    </a>
                  </li>
                  <li>
                    <a data-toggle="pill" href="#four">
                      Cryptocurrency
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-50" />
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="one">
            <div className="container-fluid">
              <OwlCarousel className="faq-carousel owl-carousel" {...faq_carousel}>
                <div className="single-faq">
                  <h4>Why I should invest in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>The Risks of Investing in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="tab-pane fade" id="two">
            <div className="container-fluid">
              <OwlCarousel className="faq-carousel owl-carousel" {...faq_carousel}>
                <div className="single-faq">
                  <h4>Why I should invest in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>The Risks of Investing in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="tab-pane fade" id="three">
            <div className="container-fluid">
              <OwlCarousel className="faq-carousel owl-carousel" {...faq_carousel}>
                <div className="single-faq">
                  <h4>Why I should invest in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>The Risks of Investing in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="tab-pane fade" id="four">
            <div className="container-fluid">
              <OwlCarousel className="faq-carousel owl-carousel" {...faq_carousel}>
                <div className="single-faq">
                  <h4>Why I should invest in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>The Risks of Investing in ICO ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day.
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
                <div className="single-faq">
                  <h4>How to Trade Cryptocurrencies ?</h4>
                  <div className="space-20" />
                  <p>
                    Swimming hundreds of feet beneath the ocean’s surface in many
                    parts of the world are prolific architects called giant
                    larvaceans. These zooplankton are not particularly giant
                    themselves (they resemble tadpoles and are about the size of a
                    pinkie finger), but every day
                  </p>
                  <div className="space-20" />
                  <a href="#" className="readmore-btn">
                    <i className="fa fa-angle-right" />
                    readmore
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="space-90" />
      </div>
      {/*faq area end*/}
    </div>
    {/*team bg area end*/}
    {/*community area start*/}
    <div className="community-area wow fadeInUp section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="heading">
              <h5>GReat Community</h5>
              <div className="space-10" />
              <h1>Our Community </h1>
            </div>
            <div className="space-60" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg">
            <div className="single-community big-social">
              <a className="google-plus" href="#">
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-community mid-social">
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <div className="single-community">
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-community">
              <a className="github" href="#">
                <i className="fa fa-github" />
              </a>
            </div>
            <div className="single-community mid-social">
              <a className="behance" href="#">
                <i className="fa fa-behance" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-community big-social">
              <a className="youtube" href="#">
                <i className="fa fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="single-community mid-social">
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
            <div className="single-community">
              <a className="flickr" href="#">
                <i className="fa fa-flickr" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*community area end*/}
    {/*footer area start*/}
    <div className="footera-area section-padding wow fadeInDown">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer">
              <div className="logo-area footer">
                <a href="#">
                  <img src={logotop} alt="" />
                </a>
              </div>
              <div className="space-20" />
              <p>
                Swimming hundreds of feet beneath the ocean’s surface in many
                parts of the world are prolific architects called giant
                larvaceans.{" "}
              </p>
              <div className="space-10" />
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <div className="single-footer">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Token Sale</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="single-footer">
              <ul>
                <li>
                  <a href="#">White Paper</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">APP</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer">
              <p>Subscribe to our Newsletter</p>
              <div className="space-20" />
              <div className="footer-form">
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <a href="" className="gradient-btn subscribe">
                    GO
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
);
                    };
export default Entre;