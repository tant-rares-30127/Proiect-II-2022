import React, { useState } from "react";

export default function FormFields({ handleRegister }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState(errorCodes)

  let isAgreementChecked = false;

  function handleInput(input) {
    setUser((prevUser) => {
      return { ...prevUser, ...input };
    });
  }

  function handlePreRegister() {
    if (isAgreementChecked) {
      handleRegister(user);
      return;
    }
    alert("Please agree to our terms and conditions!");
  }

  return (
    <>
      <div className="Register-form">
        <div className="Register-input-container">
          <div className="Input-aux">
            {error[0].active ? <div className="Register-input-error">{error[0].error}</div> : null}
            <input
              value={user.username}
              onChange={(e) => handleInput({ username: e.target.value })}
              className="Register-input"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="Input-aux">
          {error[1].active ? <div>{error[1].error}</div> : null}
            <input
              value={user.email}
              onChange={(e) => handleInput({ email: e.target.value })}
              className="Register-input"
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div className="Input-aux">
          {error[2].active ? <div>{error[1].error}</div> : null}
            <input
              value={user.password}
              onChange={(e) => handleInput({ password: e.target.value })}
              className="Register-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="Input-aux">
          {error[3].active ? <div>{error[3].error}</div> : null}
            <input
              value={user.phone}
              onChange={(e) => handleInput({ phone: e.target.value })}
              className="Register-input"
              type="text"
              placeholder="Phone number"
            />
          </div>
        </div>
        <span className="Form-important-text">
          <input
            onChange={(e) => {
              isAgreementChecked = e.target.checked;
            }}
            type="checkbox"
          />
          <label>I agree to the processing of my personal data</label>
        </span>
        <button onClick={() => handlePreRegister(user)} className="Auth-btn">
          Register
        </button>
      </div>
    </>
  );
}


const errorCodes = [
  {
    type: "username",
    error: "- Enter a username",
    active: true
  }, 
  {
    type: "email",
    error: "- Enter an email",
    active: false
  }, 
  {
    type: "password",
    error: "- Enter a password",
    active: false
  },
  {
    type: "phone",
    error: "- Enter a phone number",
    active: false
  }
]