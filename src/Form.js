import React from "react";

const Form = () => {
  return (
    <div>
      <div class="form-header text-center">
        <h3 class="mt-2">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </h3>
      </div>
      <form className="form-group mx-auto row w-50">
        <div class="md-form">
          <i class="fa fa-user prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control" />
          <label for="form-name">Your name</label>
        </div>
        <div class="md-form">
          <i class="fa fa-envelope prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control" />
          <label for="form-name">Email</label>
        </div>
        <div class="md-form">
          <i class="fa fa-pencil prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control" />
          <label for="form-name">Your message</label>
        </div>
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
