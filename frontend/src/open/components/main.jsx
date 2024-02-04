import React from "react";
import {features,countsbg,herobg,testimonials1,testimonials2,testimonials3,testimonials4,testimonials5} from "../assets/img";
import About from "./about";
import Count from "./count";
import Services from "./services";
import Features from "./features";
import Testimonials from "./testimonial";
import Portfolio from "./portofolio";
import Contact from "./contact";
import Frequent from "./frequently";
import Pricing from "./pricing";


const testimonialsData = [
    {
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: testimonials1, // Replace with actual image path or URL
      author: "Saul Goodman",
      role: "Ceo & Founder"
    },
    {
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: testimonials2, // Replace with actual image path or URL
      author: "Sara Wilsson",
      role: "Designer"
    },
    {
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: testimonials3, // Replace with actual image path or URL
      author: "Jena Karlis",
      role: "Store Owner"
    },
    {
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.",
      image: testimonials4, // Replace with actual image path or URL
      author: "Matt Brandon",
      role: "Freelancer"
    },
    {
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.",
      image: testimonials5, // Replace with actual image path or URL
      author: "John Larson",
      role: "Entrepreneur"
    }
  ];
  
   
const Main = () =>{
    return(
        <main id="main">
           <About/>
            <Count />
            <Services/>
            <Features/>
            <Testimonials testimonials={testimonialsData}/>
            <Pricing />
            <Frequent />
            <Contact/>
  </main>
    );
};

export default Main;