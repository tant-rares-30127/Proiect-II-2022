import React from "react";
import FormFields from "./FormFields";
import Logo from "../../Images/Logo_transparent.png"

export default function RegisterForm() {
  return (
    <div className="Register-container">
      <div className="Register-title-form-container">
        <img className="Logo" src={Logo} alt="Logo"/>
        <h3>iShop</h3>
      </div>
      <p>
        Get professional advice, news, strategies about out products and also
        see other people's opinion about them.
      </p>
      <div className="UsersNumber-container Form-important-text">
        <span>We are already -</span>
        <span className="UsersNumber">55574</span>
        <span>people(s)</span>
      </div>
      <FormFields />
    </div>
  );
}

