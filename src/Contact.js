import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-50 float-left text-center">kfashfiuhas</div>
      <div className="w-50 text-dark float-right">
        <div class="form-header blue accent-1">
          <h3 class="mt-2">
            <i class="fa fa-envelope" aria-hidden="true"></i> Contact me
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
            <label for="form-name">Your name</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
