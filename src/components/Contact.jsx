import React from "react";
import mailgo from "mailgo";
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
        <p>
          Email me{" "}
          <a href="mailto:eastongabrielle@gmail.com">
            eastongabrielle@gmail.com
          </a>
        </p>
        <a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">
          write me!
        </a>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xaypeqqd"
          method="POST"
        >
          <h4>Get in touch with me!</h4>
          <label htmlFor="name">Name:</label>
          <input required type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input required type="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea type="text" rows="5" cols="33" name="message" />
          {status === "SUCCESS" ? (
            <p className="response">
              Thank you for getting in touch!
              <br />I will get back to you ASP!
            </p>
          ) : (
            <button>Send</button>
          )}
          {status === "ERROR" && (
            <p className="response"> Ooops! There was an error.</p>
          )}
        </form>
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
