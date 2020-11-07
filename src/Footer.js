import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed-bottom pl-3 pb-2">
        <p className="float-left">Phil Billingsby 2020</p>
        <span className="float-left">
          <a
            href="https://github.com/PBillingsby"
            target="_blank"
            className="p-2"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/phil-billingsby/"
            target="_blank"
            className="p-2"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/Phil_Billingsby"
            target="_blank"
            className="p-2"
          >
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
