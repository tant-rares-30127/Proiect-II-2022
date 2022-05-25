import React from "react";
import "./Styles/ClientType.css";
class DemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.props.updateData
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
    this.validate();
    if (event.target.name === "email") {
      this.props.updateData({ email: event.target.value }, this.validate());
    } else
      this.props.updateData({ phone: event.target.value }, this.validate());
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["email"] = "";
      input["phone"] = "";
      this.setState({ input: input });

      alert("Demo Form is submited");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length != 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="theBill">
        <div>4. Other Information</div>

        <div className="form-group">
          <label>E-mail Address:</label>
          <input
            type="text"
            name="email"
            value={this.state.input.email}
            onChange={this.handleChange}
            placeholder="Enter e-mail"
            id="email"
          />

          <div className="text-danger">{this.state.errors.email}</div>
        </div>

        <div>
          <span>Phone:</span>
          <span className="phone">
            <input
              type="text"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              placeholder="Enter phone"
              id="phone"
            />
          </span>

          <div className="text-danger">{this.state.errors.phone}</div>
        </div>
      </div>
    );
  }
}

export default DemoForm;
