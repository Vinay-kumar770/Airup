import styles from "../assets/css/auction.module.css";
const Auction=() =>{
    return(
        <>
        <div className={styles.causes}>
  <div className="container">
    <div className="section-header text-center">
      <p>Popular Causes</p>
      <h2>Let's know about charity causes around the world</h2>
    </div>
    <div className="owl-carousel causes-carousel">
      <div className="causes-item">
        <div className="causes-img">
          <img src="img/causes-1.jpg" alt="Image" />
        </div>
        <div className="causes-progress">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span>85%</span>
            </div>
          </div>
          <div className="progress-text">
            <p>
              <strong>Raised:</strong> $100000
            </p>
            <p>
              <strong>Goal:</strong> $50000
            </p>
          </div>
        </div>
        <div className="causes-text">
          <h3>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet elit. Phasell nec pretium mi. Curabit
            facilis ornare velit non vulputa
          </p>
        </div>
        <div className="causes-btn">
          <a className="btn btn-custom">Learn More</a>
          <a className="btn btn-custom">Donate Now</a>
        </div>
      </div>
      <div className="causes-item">
        <div className="causes-img">
          <img src="img/causes-2.jpg" alt="Image" />
        </div>
        <div className="causes-progress">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span>85%</span>
            </div>
          </div>
          <div className="progress-text">
            <p>
              <strong>Raised:</strong> $100000
            </p>
            <p>
              <strong>Goal:</strong> $50000
            </p>
          </div>
        </div>
        <div className="causes-text">
          <h3>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet elit. Phasell nec pretium mi. Curabit
            facilis ornare velit non vulputa
          </p>
        </div>
        <div className="causes-btn">
          <a className="btn btn-custom">Learn More</a>
          <a className="btn btn-custom">Donate Now</a>
        </div>
      </div>
      <div className="causes-item">
        <div className="causes-img">
          <img src="img/causes-3.jpg" alt="Image" />
        </div>
        <div className="causes-progress">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span>85%</span>
            </div>
          </div>
          <div className="progress-text">
            <p>
              <strong>Raised:</strong> $100000
            </p>
            <p>
              <strong>Goal:</strong> $50000
            </p>
          </div>
        </div>
        <div className="causes-text">
          <h3>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet elit. Phasell nec pretium mi. Curabit
            facilis ornare velit non vulputa
          </p>
        </div>
        <div className="causes-btn">
          <a className="btn btn-custom">Learn More</a>
          <a className="btn btn-custom">Donate Now</a>
        </div>
      </div>
      <div className="causes-item">
        <div className="causes-img">
          <img src="img/causes-4.jpg" alt="Image" />
        </div>
        <div className="causes-progress">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span>85%</span>
            </div>
          </div>
          <div className="progress-text">
            <p>
              <strong>Raised:</strong> $100000
            </p>
            <p>
              <strong>Goal:</strong> $50000
            </p>
          </div>
        </div>
        <div className="causes-text">
          <h3>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet elit. Phasell nec pretium mi. Curabit
            facilis ornare velit non vulputa
          </p>
        </div>
        <div className="causes-btn">
          <a className="btn btn-custom">Learn More</a>
          <a className="btn btn-custom">Donate Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default Auction;