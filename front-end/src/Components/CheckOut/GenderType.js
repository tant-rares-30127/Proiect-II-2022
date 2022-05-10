import React, { Component } from "react";
import "./Styles/ClientType.css";
class GenderType extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
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
  }

  render() {
    return (
      <div className="demo2">
        <form onSubmit={this.formSubmit}>
          <span className="radio1">
            <label>
              <input
                type="radio"
                value="Mr"
                checked={this.state.selectedOption === "Mr"}
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
        </form>
      </div>
    );
  }
}

export default GenderType;
