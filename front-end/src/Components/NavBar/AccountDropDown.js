import React, { useState } from "react";

export default function AccountDropDown() {
  const [loggedin, setLoggedin] = useState(false);

  const displayAccount = (
    <>
      <h3>Logged in</h3>
      <h4>Sebastian daulalopata</h4>

      <div className="DropwDown-link-container">
        <button className="Page-link logout_btn">Log out</button>
      </div>
    </>
  );

  const displayNoAccount = (
    <>
      <h3>Log in or register to begin shopping!</h3>
      <div className="DropwDown-link-container">
        <a href="/login" className="Page-link">
          Login
        </a>
        <a href="/register" className="Page-link">
          Register
        </a>
      </div>
    </>
  );

  return <div>
      <div className="DropDown-title-container">
        <h2>Your Account</h2>
      </div>
      {loggedin ? displayAccount : displayNoAccount}</div>;
}
