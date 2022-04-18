import React from "react";

export default function FormFieldsLogin() {
  return (
    
    <form className = 'Login-form'>
      <div className="Login-input-container">
        <input 
        className="Login-input"
        type = "text"
        placeholder = "E-MAIL"
        />
        <input
        className = "Login-input"
        type = "password"
        placeholder="PASSWORD"
        />
      </div>
    </form>   
  );
}