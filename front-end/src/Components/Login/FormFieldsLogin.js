import React from "react";

export default function FormFieldsLogin({ handleLogIn }) {
  let user = {
    email: "",
    password: "",
  };

  function handleEmailChange(email) {
    user.email = email;
  }

  function handlePasswordChange(password) {
    user.password = password;
  }

  return (
    <>
      <form className="Login-form">
        <div className="Login-input-container">
          <input
            onChange={(e) => handleEmailChange(e.target.value)}
            className="Login-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="Login-input"
            type="password"
            placeholder="Password"
          />
        </div>
      </form>
        <button onClick={() => handleLogIn(user)} className="Login-btn">Log in</button>

    </>
  );
}
