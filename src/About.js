import React from "react";

const About = () => {
  return (
    <div className="d-inline-flex">
      <div className="row">
        <div className="float-left w-25 pt-4 pl-3">
          <h4 className="blue-text">Full-Stack Software Developer</h4>
          <p>
            Based in Las Vegas, Nevada. I enjoy designing, building, breaking,
            and fixing web applications.
          </p>
        </div>
        <div className="main mx-auto w-75 pt-3">
          <div>
            <div className="row mx-auto">
              <div className="col-sm border border-dark rounded text-center icon-style m-3">
                <i className="fa fa-diamond pr-2"></i>
                <h4 className="text-shadow">Design</h4>
                <p>Front-end development</p>
                <p className="blue-text">Tools used:</p>
              </div>
              <div className="col-sm border border-dark rounded text-center icon-style m-3">
                <i className="fa fa-code pr-2"></i>
                <h4 className="text-shadow">Design</h4>
                <p>fasljkdhflask</p>
              </div>
              <div className="col-sm border border-dark rounded text-center icon-style m-3">
                <i className="fa fa-wrench pr-2"></i>
                <h4 className="text-shadow">Design</h4>
                <p>fasljkdhflask</p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg">
              <p>With a non-tech background, I took a liking</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ac elementum sem. Donec et pretium dolor. Cras tincidunt tempor
                felis eu pellentesque. Duis at quam dolor. Pellentesque aliquet
                tortor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
