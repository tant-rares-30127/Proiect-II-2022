import React from "react";

export default function FormFieldsLogin() {
  return (
    <form className="Login-form">
      <div className="Login-input-container">
        <input className="Login-input" type="text" placeholder="E-mail" />
        <input className="Login-input" type="password" placeholder="Password" />
      </div>
    </form>
  );
}
