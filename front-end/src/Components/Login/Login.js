import React from "react";
import axios from "axios";
import FormFieldsLogin from "./FormFieldsLogin";
import logo from "../../Images/Logo_transparent.png"

export default function Login() {

  function handleLogIn(user) {
    console.log(user)
    if (user.email === '' || user.password === '') {
      alert("Invalid credentials")
      return
    }
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
    
    }).catch((err) => console.log(err))
    .catch((err) => console.log(err))
  }

  return (
    <div className="Login-body-container-main">
      <div className="Login-header-container">
      <div className="Register-title-form-container">
        <img className="Logo" src={logo} alt="Logo"/>
        <h2>iShop</h2>
      </div>
        <span>
          <h3>Log in and go shopping!</h3>
        </span>
      </div>
      <div className="Login-body-container">
        <FormFieldsLogin handleLogIn={handleLogIn}/>
        <span className="Forget-pass">
          <a href="/register">Forgot the password?</a>
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
