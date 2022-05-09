import React, { Component } from "react";
import "./Styles/ClientType.css";
class Demo2 extends Component {
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
        </form>
      </div>
    );
  }
}

export default Demo2;
