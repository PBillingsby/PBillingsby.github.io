import React from "react";

const Form = () => {
  return (
    <div className="col-md-9 mb-md-0 mb-5 mt-4">
      <p className="text-light text-center">Have any questions?</p>

      <form className="form-group mx-auto row w-50">
        <div className="md-form text-light">
          <i className="fa fa-user prefix"></i>
          <input
            type="text"
            id="form-name"
            className="form-control"
            placeholder="Your name"
          />
        </div>
        <div className="md-form text-light">
          <i className="fa fa-envelope prefix grey-text"></i>
          <input
            type="text"
            id="form-name"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div class="md-form text-light">
          <i className="fa fa-pencil prefix grey-text"></i>
          <input
            type="text"
            id="form-name"
            className="form-control"
            placeholder="Your message"
          />
        </div>
        <button type="submit" className="btn btn-light mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
