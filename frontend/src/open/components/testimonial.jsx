import React from 'react';
function Testimonials({ testimonials }) {
  const testimonialsList = testimonials.map((testimonial, index) => (
    <div className="swiper-slide" key={index}>
      <div className="testimonial-item">
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          {testimonial.text}
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img
          src={testimonial.image}
          className="testimonial-img"
          alt=""
        />
        <h3>{testimonial.author}</h3>
        <h4>{testimonial.role}</h4>
      </div>
    </div>
  ));

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            {testimonialsList}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
