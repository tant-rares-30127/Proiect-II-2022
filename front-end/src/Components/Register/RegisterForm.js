import React from "react";
import axios from "axios";
import FormFields from "./FormFields";
import logo from "../../Images/Logo_transparent.png";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  function handleRegister(user) {
    console.log(user);
    axios({
      method: "post",
      url: "https://localhost:5001/Users/RegisterUser",
      headers: {},
      data: {
        id: 2,
        username: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: {
          id: 1,
          country: "Romania",
          city: "Sighisoara",
          details: "La sefi",
        },
      },
    })
      .then((response) => response.data)
      .then((data) => {
        alert("Your account has been created!");
        navigate("/login");
      });
  }

  return (
    <div className="Register-container">
      <div className="Register-title-form-container">
        <img className="Logo" src={logo} alt="Logo" />
        <h3>iShop</h3>
      </div>
      <p>
        Get professional advice, news, strategies about out products and also
        see other people's opinion about them.
      </p>
      <FormFields handleRegister={handleRegister} />
    </div>
  );
}
