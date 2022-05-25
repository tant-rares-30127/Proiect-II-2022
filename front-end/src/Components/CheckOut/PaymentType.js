import React, { Component } from "react";
import "./Styles/ClientType.css";
import Apple from "../../Images/Pay/ApplePay.png";
import Google from "../../Images/Pay/Google Pay.png";
import PayPal from "../../Images/Pay/PayPal.png";
import Discover from "../../Images/Pay/Discover.png";
import Maestro from "../../Images/Pay/Maestro.png";
import MaestroCard from "../../Images/Pay/MasterCard.png";
import Visa from "../../Images/Pay/Visa.png";

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
    this.props.updateData({ typePay: event.target.value }, true);
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
            <input
              type="radio"
              value="option1"
              checked={this.state.selectedOption === "option1"}
              onChange={this.onValueChange}
            />
            <span className="imagePay">
              <div>By Payment Systems</div>
              <span>
                <img src={Apple} />
                <img src={Google} />
                <img src={PayPal} />
              </span>
            </span>
          </div>
          <div className="radio2">
            <input
              type="radio"
              value="option2"
              checked={this.state.selectedOption === "option2"}
              onChange={this.onValueChange}
            />
            <span className="imagePay">
              <div>By Payment Systems</div>
              <span>
                <img src={MaestroCard} />
                <img src={Maestro} />
                <img src={Visa} />
                <img src={Discover} />
              </span>
            </span>
          </div>
          <div className="radio2">
            <input
              type="radio"
              value="option3"
              checked={this.state.selectedOption === "option3"}
              onChange={this.onValueChange}
            />
            <span className="imagePay">Reimbursment</span>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentType;
