import React from 'react';

function Portfolio({ items }) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {items.map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}>
              <div className="portfolio-wrap">
                <img src={item.image} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
                <div className="portfolio-links">
                  <a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
