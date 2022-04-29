import React from "react";
import axios from "axios";
import FormFieldsLogin from "./FormFieldsLogin";

export default function Login() {

  function handleLogIn(user) {
    console.log(user)
    // axios.post(
    //   "https://localhost:5001/Users/LoginAccess",
    //   `email=${user.email}&password=${user.password}`
    // ).then((response) => response.data)
    // .then((data) => {
    //   console.log(data)
    // })
    axios({
      method: 'post',
      url: "https://localhost:5001/Users/LoginAccess",
      headers: {}, 
      data: {
        email: user.email,
        password: user.password
      }
    }).then((response) => response.data)
    .then((data) => {
      alert(data)
    })
  }

  return (
    <div className="Login-body-container-main">
      <div className="Login-body-container">
        <FormFieldsLogin handleLogIn={handleLogIn}/>
        <span className="Forget-pass">
          <a href="/register">Forogot the password?</a>
        </span>
      </div>
      <div className="Rectangle-shape" />
      <div className="Login-body-container">
        <div className="Login-text-container">
          <div className="Login-title-form-container">
            <h2 className="Login-title-form-container">
              Don't you have an account
            </h2>
          </div>
          <div>
            <p className="Login-text">
              Become a community member to unlock features
            </p>
            <p className="Login-text">that are only for registered users</p>
          </div>
          <a className="Login-input-container" href="/register">
            <button className="Authentif-btn">Make a new account</button>
          </a>
        </div>
      </div>
    </div>
  );
}
