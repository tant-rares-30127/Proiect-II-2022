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
      <p>
        We are already so many!
      </p>
      <FormFields />
    </div>
  );
}
