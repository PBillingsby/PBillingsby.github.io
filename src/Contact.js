import React from "react";
import Form from "./Form";
const Contact = () => {
  return (
    <div>
      <div className="w-50 float-left text-center">
        <ul class="list-unstyled mt-5">
          <li>
            <i class="fa fa-map-marker fa-2x" />
            <p>Las Vegas Valley Area, NV</p>
          </li>
          <li>
            <i class="fa fa-phone fa-2x" />
            <p>(215)439-0048</p>
          </li>
          <li>
            <i class="fa fa-envelope fa-2x" />
            <p>philbillingsby@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="w-50 text-dark float-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
