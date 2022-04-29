import React from "react";
import axios from "axios";
import FormFields from "./FormFields";
import Logo from "../../Images/Logo_transparent.png"

export default function RegisterForm() {

  function handleRegister(user) {
    console.log(user)
    axios({
      method: 'post',
      url: "https://localhost:5001/Users/RegisterUser",
      headers: {}, 
      data: {
        id: 2,
        username: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone
      }
    }).then((response) => response.data)
    .then((data) => {
      alert(data)
    })
  }

  return (
    <div className="Register-container">
      <div className="Register-title-form-container">
        <img className="Logo" src={Logo} alt="Logo"/>
        <h3>iShop</h3>
      </div>
      <p>
        Get professional advice, news, strategies about out products and also
        see other people's opinion about them.
      </p>
      <div className="UsersNumber-container Form-important-text">
        <span>We are already -</span>
        <span className="UsersNumber">55574</span>
        <span>people(s)</span>
      </div>
      <FormFields handleRegister={handleRegister}/>
    </div>
  );
}

