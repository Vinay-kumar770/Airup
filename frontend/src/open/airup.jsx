import React, { useEffect } from 'react';
import {heroimg, about,portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6,portfolio7,portfolio8,portfolio9,features,countsbg,herobg,testimonials1,testimonials2,testimonials3,testimonials4,testimonials5} from "./assets/img";
import AOS from 'aos';
import Swiper from 'swiper';
import GLightbox from 'glightbox';
import PureCounter from "@srexi/purecounterjs";
import Isotope from 'isotope-layout';
//css
import "./style.css";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/swiper-bundle.css";

//JS
import 'aos/dist/aos';
import "@srexi/purecounterjs/dist/purecounter_vanilla";
import "bootstrap/dist/js/bootstrap.bundle";
import "glightbox/dist/js/glightbox";
//import "isotope-layout/dist/isotope.pkgd";
//import Swiper from 'swiper/swiper-bundle.min.js';
//import 'swiper/swiper-bundle.css';
//import "bootstrap/dist/js/bootstrap.min.js";
//import "glightbox/dist/js/glightbox.min.js";
//import "isotope-layout/dist/isotope.pkgd.min.js";
//import "swiper/swiper-bundle";


const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    
    padding: '10px',
  },
  flexItem: {
    flex: 1, // Equal width for both divs; adjust as needed
    margin: '5px',
    padding: '10px',
    textAlign: 'center',
  },
  aalign:{
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#4caf50', 
    color: 'white', 
    border: '1px solid #4caf50',
    borderRadius: '4px', 
    transition: 'background-color 0.3s',
  }
};

function handleLoad() {
  // Your code to handle the load event goes here
  console.log('Window has loaded.');
}
const AirUP = () => {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      let navbarlinks = select('#navbar .scrollto', true);
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };


    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    const scrollto = (el) => {
      let header = select('#header');
      let offset = header.offsetHeight;

      if (!header.classList.contains('header-scrolled')) {
        offset -= 16;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth',
      });
    };

    const headerScrolled = () => {
      let selectHeader = select('#header');
      if (selectHeader) {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      }
    };

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);

    const toggleBacktotop = () => {
      let backtotop = select('.back-to-top');
      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
    };

    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);

    on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

    on('click', '.navbar .dropdown > a', function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);

    on('click', '.scrollto', function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    }, true);

    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    };

    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  
    // Initialize Isotope for portfolio filtering
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });
  
        let portfolioFilters = select('#portfolio-flters li', true);
  
        on('click', '#portfolio-flters li', function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function () {
            AOS.refresh()
          });
        }, true);
      }
    });

    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    // Initialize the Swiper for portfolio details slider
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    // Initialize AOS (Animate On Scroll) library
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
    new PureCounter();
    // Call your functions here
    handleLoad();
  }, []);
  return (
    <>
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">
        <a href="index.html">AIRUP</a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="getstarted scrollto" href="#about">
              Get Started
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Bettter Digital Experience With Techie</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          <img
            src={heroimg}
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row" style={styles.mainContainer}>
          {/*<div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={150}
          >
            <img src={about} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check-circle" /> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
            <a href="#" className="read-more">
              Read More <i className="bi bi-long-arrow-right" />
            </a>
          </div>*/}
          <div style={styles.flexItem}>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8991/8991202.png" width={400} height={400}/>
            </div>
            <div style={{textAlign:"center",paddingTop:"10px"}}>
              <a href="/inves" style= {styles.aalign}>I am an Investor </a>
            </div>
          </div>
          <div style={styles.flexItem}>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6553/6553332.png" width={400} height={400}/>
             </div>
             <div  style={{textAlign:"center",paddingTop:"10px"}}>
              <a  href="/entre" style={styles.aalign}>I am an Entrepreneur</a></div>         
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Counts Section ======= */}
    <section id="counts" className="counts">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={521}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={1463}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hours Of Support</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={15}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
    {/* End Counts Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  />
                </svg>
                <i className="bx bxl-dribbble" />
              </div>
              <h4>
                <a href="">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                  />
                </svg>
                <i className="bx bx-file" />
              </div>
              <h4>
                <a href="">Sed Perspiciatis</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                  />
                </svg>
                <i className="bx bx-tachometer" />
              </div>
              <h4>
                <a href="">Magni Dolores</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                  />
                </svg>
                <i className="bx bx-layer" />
              </div>
              <h4>
                <a href="">Nemo Enim</a>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box iconbox-red">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                  />
                </svg>
                <i className="bx bx-slideshow" />
              </div>
              <h4>
                <a href="">Dele Cardo</a>
              </h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box iconbox-teal">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                  />
                </svg>
                <i className="bx bx-arch" />
              </div>
              <h4>
                <a href="">Divera Don</a>
              </h4>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Features</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <i className="bx bx-receipt" />
              <h4>Est labore ad</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bx bx-cube-alt" />
              <h4>Harum esse qui</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bx bx-images" />
              <h4>Aut occaecati</h4>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bx bx-shield" />
              <h4>Beatae veritatis</h4>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2 "
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img src={features} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials1}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials2}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials3}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials4}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials5}
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/* End Testimonials Section */}
    {/* ======= Portfolio Section ======= */}
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio2}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio2}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio3}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio3}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio4}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio4}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio5}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio5}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio6}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio6}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio7}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio7}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio8}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio8}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio9}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio9}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
    {/* ======= Pricing Section ======= */}
    <section id="pricing" className="pricing section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="box">
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="box featured">
              <h3>Business</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="box">
              <h3>Developer</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="box">
              <span className="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Pricing Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                Feugiat scelerisque varius morbi enim nunc?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Dolor sit amet consectetur adipiscing elit?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 384 }}
              allowFullScreen=""
            />
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Techie</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright-wrap d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Techie</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/techie-free-skin-bootstrap-3/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  <div id="preloader" />
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

  );
};
  
  export default AirUP;