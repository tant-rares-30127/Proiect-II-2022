import React, { useState } from "react";
import FormField from "./FormField";
import { v4 as uuidv4 } from "uuid";

export default function FormFields({ handleRegister }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [agreementErr, setAgreementErr] = useState(false);

  function handleInput(input) {
    setUser((prevUser) => {
      return { ...prevUser, ...input };
    });
  }

  const formFields = formInputs.map((i) => {
    return (
      <FormField
        key={i.key}
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
        <div className="Register-input-container">{formFields}</div>
        {agreementErr ? (
          <div className="Register-input-error">
            - Please agree to our terms and conditions!
          </div>
        ) : null}
        <span className="Form-important-text">
          <input
            onChange={(e) => {
              setIsAgreementChecked(e.target.checked);
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
    key: uuidv4(),
    name: "username",
    placeholder: "Username",
    type: "text",
    error: "- Enter a valid username",
  },
  {
    key: uuidv4(),
    name: "email",
    placeholder: "E-mail",
    type: "text",
    error: "- Enter a valid e-mail",
  },
  {
    key: uuidv4(),
    name: "password",
    placeholder: "Password",
    type: "password",
    error: "- Enter a valid password",
  },
  {
    key: uuidv4(),
    name: "phone",
    placeholder: "Phone number",
    type: "text",
    error: "- Enter a valid phone number",
  },
];