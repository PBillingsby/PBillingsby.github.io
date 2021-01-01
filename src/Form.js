import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    debugger;
  };
  render() {
    console.log(this.state);
    return (
      <div className="col-md-9 mb-md-0 mb-5 mt-4">
        <h4 className="text-center blue-text">Any questions?</h4>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="form-group mx-auto row w-50"
        >
          <div className="md-form text-light">
            <span className="d-inline-block pb-3">
              <i className="fa fa-user prefix"></i>
              <input
                type="text"
                onChange={this.handleChange}
                id="form-name"
                className="form-control"
                placeholder="Your name"
              />
            </span>
          </div>
          <div className="md-form text-light">
            <span className="d-inline-block pb-3">
              <i className="fa fa-envelope prefix grey-text"></i>
              <input
                type="text"
                onChange={this.handleChange}
                id="form-name"
                className="form-control"
                placeholder="Email"
              />
            </span>
          </div>
          <div class="md-form text-light">
            <span className="d-inline-block pb-3">
              <i className="fa fa-pencil prefix grey-text"></i>
              <input
                type="text"
                onChange={this.handleChange}
                id="form-subject"
                className="form-control mb-3"
                placeholder="Subject"
              />
              <textarea
                rows="6"
                type="text"
                onChange={this.handleChange}
                id="form-message"
                className="form-control"
                placeholder="Your message"
              />
            </span>
          </div>
          <br />
          <button type="submit" className="mx-auto btn btn-light mt-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
