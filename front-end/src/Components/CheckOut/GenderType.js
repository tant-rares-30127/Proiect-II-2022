import React, { Component } from "react";
import "./Styles/ClientType.css";
class GenderType extends Component {
  constructor() {
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
      alert("gender ok");
    }
  }

  validate() {
    let selectedOption = this.state.selectedOption;
    let errors = {};
    let isValid = true;
    if (selectedOption != "Mr." && selectedOption != "Mrs.") {
      errors = "Please select a gender";
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
          <span className="radio1">
            <label>
              <input
                type="radio"
                value="Mr."
                checked={this.state.selectedOption === "Mr."}
                onChange={this.onValueChange}
              />
              Mr.
            </label>
          </span>
          <span className="radio1">
            <label>
              <input
                type="radio"
                value="Mrs."
                checked={this.state.selectedOption === "Mrs."}
                onChange={this.onValueChange}
              />
              Mrs.
            </label>
          </span>
          <div className="text-danger">{this.state.errors}</div>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default GenderType;
