import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed-bottom pl-3 mt-4">
        <span className="mx-auto">
          <p className="d-inline-block">Phil Billingsby 2020</p>

          <a
            href="https://github.com/PBillingsby"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 orange-color"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/phil-billingsby/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 orange-color"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/Phil_Billingsby"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 orange-color"
          >
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
