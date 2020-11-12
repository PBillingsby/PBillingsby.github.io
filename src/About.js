import React from "react";

const About = () => {
  return (
    <div className="d-inline-flex">
      <div className="row">
        <div className="float-left w-25 pt-4">
          <h4 className="orange-color">Full-Stack Software Developer</h4>
          <p>
            Based in Las Vegas, Nevada. I enjoy designing, building, breaking,
            and fixing web applications.
          </p>
        </div>
        <div className="main mx-auto w-50">
          <div className="row pt-4">
            <div className="col-lg">
              <h4 className="text-center orange-color">Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ac elementum sem. Donec et pretium dolor. Cras tincidunt tempor
                felis eu pellentesque. Duis at quam dolor. Pellentesque aliquet
                tortor sed porttitor lacinia. Donec venenatis suscipit nibh in
                tristique. Maecenas in fermentum lectus. Nam ut arcu tincidunt,
                viverra purus nec, ullamcorper odio. Mauris aliquet sagittis
                ipsum, sed imperdiet velit malesuada eget. Vivamus ac sodales
                enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ac elementum sem. Donec et pretium dolor. Cras tincidunt tempor
                felis eu pellentesque. Duis at quam dolor. Pellentesque aliquet
                tortor
              </p>
            </div>
          </div>
          <div className="row mx-auto">
            <span className="col-sm d-inline-flex">
              <i className="fa fa-paint-brush pr-2"></i>
              <p>Design</p>
            </span>
            <span className="col-sm d-inline-flex">
              <i className="fa fa-paint-brush pr-2"></i>
              <p>Design</p>
            </span>
            <span className="col-sm d-inline-flex">
              <i className="fa fa-paint-brush pr-2"></i>
              <p>Design</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
