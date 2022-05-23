import React, { useState } from "react";
import regex from "../Regex";

export default function FormFieldsLogin({ handleLogIn }) {
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleEmailChange(email) {
    console.log(email);
    if (email.match(regex.emailRegex) === null) {
      setEmailErr(true);
      setUser((prev) => {
        return { ...prev, ...{ email: "" } };
      });
      return;
    }
    setEmailErr(false);
    user.email = email;
    setUser((prev) => {
      return { ...prev, ...{ email: email } };
    });
  }

  function handlePasswordChange(password) {
    if (password.match(regex.passwordRegex) === null) {
      setPwdErr(true);
      setUser((prev) => {
        return { ...prev, ...{ password: "" } };
      });
      return;
    }
    setPwdErr(false);
    setUser((prev) => {
      return { ...prev, ...{ password: password } };
    });
  }

  return (
    <>
      <form className="Login-form">
        <div className="Login-input-container">
          <div className="Login-input-error-container">
            {emailErr ? (
              <div className="Register-input-error">{"Email invalid"}</div>
            ) : null}
            <input
              onChange={(e) => handleEmailChange(e.target.value)}
              className="Login-input"
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div className="Login-input-error-container">
            {pwdErr ? (
              <div className="Register-input-error">{"Invalid password"}</div>
            ) : null}
            <input
              onChange={(e) => handlePasswordChange(e.target.value)}
              className="Login-input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </form>
      <button onClick={() => handleLogIn(user)} className="Login-btn">
        Log in
      </button>
    </>
  );
}
