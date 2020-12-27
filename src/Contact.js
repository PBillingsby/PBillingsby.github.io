import React from "react";
import Form from "./Form";
const Contact = () => {
  return (
    <div>
      <div className="w-50 float-left text-center">
        <i class="fa fa-info fa-2x pt-4" aria-hidden="true"></i>
        <p className="w-50 mx-auto">
          To reach out for any additional information about opportunities for
          collaboration or employment, please feel free to reach out for
          anything
        </p>
        <ul class="list-unstyled mt-1">
          <li>
            <i class="fa fa-map-marker fa-2x" />
            <p>Las Vegas Valley Area, NV</p>
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
