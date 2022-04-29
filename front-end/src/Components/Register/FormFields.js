import React from "react";

export default function FormFields({ handleRegister }) {
  let user = {
    id: 1,
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  function handleFullName(fullName) {
    user.username = fullName;
  }

  function handleEmail(email) {
    user.email = email;
  }

  function handlePassword(password) {
    user.password = password;
  }

  function handlePhoneNumber(phone) {
    user.phone = phone;
  }

  return (
    <>
      <form className="Register-form">
        <div className="Register-input-container">
          <input
            onChange={(e) => handleFullName(e.target.value)}
            className="Register-input"
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => handleEmail(e.target.value)}
            className="Register-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => handlePassword(e.target.value)}
            className="Register-input"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => handlePhoneNumber(e.target.value)}
            className="Register-input"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <span className="Form-important-text">
          <input type="checkbox" />
          <label>I agree to the processing of my personal data</label>
        </span>
      </form>
      <button onClick={() => handleRegister(user)} className="Auth-btn">
        Register
      </button>
    </>
  );
}
