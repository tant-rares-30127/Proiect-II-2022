import React, { Component } from "react";
import "./Styles/ClientType.css";
class PaymentType extends Component {
  constructor(props) {
    super(props);
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
      <div className="demo3">
        <form onSubmit={this.formSubmit}>
          <div className="radio2">
            <label>
              <input
                type="radio"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.onValueChange}
              />
              By Payment Systems
            </label>
          </div>
          <div className="radio2">
            <label>
              <input
                type="radio"
                value="option2"
                checked={this.state.selectedOption === "option2"}
                onChange={this.onValueChange}
              />
              Pay by Credit Card
            </label>
          </div>
          <div className="radio2">
            <label>
              <input
                type="radio"
                value="option3"
                checked={this.state.selectedOption === "option3"}
                onChange={this.onValueChange}
              />
              Reimbursment
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentType;
