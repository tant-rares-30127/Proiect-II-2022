import React from "react";

export default function FormFieldsLogin() {
  return (
    <form className = 'Login-form'>
      <div className="Login-input-container">
        <input 
        className="Login-input"
        type = "text"
        placeholder = "e-mail"
        />
        <input
        className = "Login-input"
        type = "text"
        placeholder="password"
        />
      </div>
      <button className = 'Login-btn'>Log in</button>
      
      </form>
  );
}