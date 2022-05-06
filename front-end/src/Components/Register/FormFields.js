import React, { useState } from "react";
import FormField from "./FormField";

export default function FormFields({ handleRegister }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState(errorCodes);

  let isAgreementChecked = false;

  function handleInput(input) {
    setUser((prevUser) => {
      return { ...prevUser, ...input };
    });
  }

  const formFields = formInputs.map((i) => {
    return (
      <FormField
        placeholder={i.placeholder}
        data={user[i.key]}
        error={i.error}
        type={i.type}
        handleInput={handleInput}
        name={i.name}
      />
    );
  });

  return (
    <>
      <div className="Register-form">
        <div className="Register-input-container">
          {formFields}
        </div>
        {error[4].active ? (
          <div className="Register-input-error">{error[4].error}</div>
        ) : null}
        <span className="Form-important-text">
          <input
            onChange={(e) => {
              isAgreementChecked = e.target.checked;
            }}
            type="checkbox"
          />
          <label>I agree to the processing of my personal data</label>
        </span>
        <button onClick={() => handleRegister(user)} className="Auth-btn">
          Register
        </button>
      </div>
    </>
  );
}

const formInputs = [
  {
    name: "username",
    placeholder: "Username",
    type: "text",
    error: "- Enter a valid username",
  },
  {
    name: "email",
    placeholder: "E-mail",
    type: "text",
    error: "- Enter a valid e-mail",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    error: "- Enter a valid password",
  },
  {
    name: "phone",
    placeholder: "Phone number",
    type: "text",
    error: "- Enter a valid phone number",
  },
];

const errorCodes = [
  {
    type: "username",
    error: "- Enter a valid username",
    active: false,
  },
  {
    type: "email",
    error: "- Enter an valid email",
    active: false,
  },
  {
    type: "password",
    error: "- Enter a valid password",
    active: false,
  },
  {
    type: "phone",
    error: "- Enter a valid phone number",
    active: false,
  },
  {
    type: "terms",
    error: "- Please agree to our terms and conditions!",
    active: false,
  },
];
