import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container w-50 p-3 bg-light">
        <form className="form-group row w-50">
          <div className="col-sm">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              className="form-control mb-2"
              placeholder="Last Name"
            />
          </div>
          <div className="pt-4">
            <input
              type="text"
              name="email"
              className="form-control mb-2"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
