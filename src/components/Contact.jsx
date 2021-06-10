import React from "react";
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-container" id="contact">

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xaypeqqd"
          method="POST"
          >
          <h4>Let's talk! Fill out this form.</h4>
          <input required type="text" name="name" placeholder="Name" className="form-control" />
          <input required type="email" name="email" placeholder="Email" className="form-control"/>
          <textarea type="text" rows="5" cols="33" name="message" placeholder="Message" className="form-control"/>
          {status === "SUCCESS" ? (
            <p className="response">
              Thank you for getting in touch!
              <br />I will get back to you as soon as possible!
            </p>
          ) : (
            <button>Send</button>
          )}
          {status === "ERROR" && (
            <p className="response"> Ooops! There was an error.</p>
          )}
        </form>
          <p>
            Or just send me an email{" "}
            <a href="mailto:eastongabrielle@gmail.com">
              eastongabrielle@gmail.com
            </a>
          </p>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
