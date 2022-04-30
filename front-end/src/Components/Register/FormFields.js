import React, { useState } from "react";

export default function FormFields({ handleRegister }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  let isAgreementChecked = false;

  function handleInput(input) {
    setUser(prevUser => {
      return {...prevUser, ...input}
    })
  }

  function handlePreRegister() {
    if (isAgreementChecked) {
      handleRegister(user)
      return
    }
    alert("Please agree to our terms and conditions!")
  }

  return (
    <>
      <div className="Register-form">
        <div className="Register-input-container">
          <input
            value={user.username}
            onChange={(e) => handleInput({ username: e.target.value })}
            className="Register-input"
            type="text"
            placeholder="Full Name"
          />
          <input
            value={user.email}
            onChange={(e) => handleInput({ email: e.target.value })}
            className="Register-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            value={user.password}
            onChange={(e) => handleInput({ password: e.target.value })}
            className="Register-input"
            type="password"
            placeholder="Password"
          />
          <input
            value={user.phone}
            onChange={(e) => handleInput({ phone: e.target.value })}
            className="Register-input"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <span className="Form-important-text">
          <input onChange={(e) => {isAgreementChecked = e.target.checked}}
          type="checkbox"/>
          <label>I agree to the processing of my personal data</label>
        </span>
        <button onClick={() => handlePreRegister(user)} className="Auth-btn">
          Register
        </button>
      </div>
    </>
  );
}
