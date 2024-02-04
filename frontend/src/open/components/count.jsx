import React from "react";

const Count = () =>{
    return(
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
    );
};
export default Count;