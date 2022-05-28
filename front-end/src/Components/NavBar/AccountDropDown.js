import React, { useContext } from "react";
import { UserContext } from "../App";

export default function AccountDropDown() {
  const { user, handleUser } = useContext(UserContext);

  const displayAccount = (
    <>
      <h3 className="DropDown-header">Logged in as</h3>
      <h4 className="DropDown-username">{(user !== undefined && user !== null) ? user.username : null}</h4>

      <div className="DropwDown-link-container">
        <button onClick={() => {
          handleUser(null)
          window.location.href = "http://localhost:3000/"
        }} className="Page-link logout_btn">Log out</button>
      </div>
    </>
  );

  const displayNoAccount = (
    <>
      <h3 className="DropDown-header">Log in or register to begin shopping!</h3>
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
      {(user === undefined || user === null) ? displayNoAccount : displayAccount}</div>;
}
