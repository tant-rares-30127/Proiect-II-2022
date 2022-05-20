import React, { Component } from "react";
import "./Styles/ClientType.css";
class ClientType extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedOption: "",
      errors: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    if (this.validate()) {
      let errors = "";
      this.setState({ errors: errors });
      alert("The comand is submitted");
    }
  }

  validate() {
    let selectedOption = this.state.selectedOption;
    let errors = {};
    let isValid = true;

    if (selectedOption !== "Already_Client" && selectedOption != "New_Client") {
      errors = "Please select a type";
      isValid = false;
    } else if (selectedOption == "New_Client") {
      errors = "Please create an acount";
      isValid = false;
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }

  render() {
    return (
      <div className="demo2">
        <form onSubmit={this.formSubmit}>
          <span className="radio">
            <label>
              <input
                type="radio"
                value="New_Client"
                checked={this.state.selectedOption === "New_Client"}
                onChange={this.onValueChange}
              />
              New Client
            </label>
          </span>
          <span className="radio">
            <label>
              <input
                type="radio"
                value="Already_Client"
                checked={this.state.selectedOption === "Already_Client"}
                onChange={this.onValueChange}
              />
              Already Client
            </label>
          </span>
          <div className="text-danger">{this.state.errors}</div>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default ClientType;
