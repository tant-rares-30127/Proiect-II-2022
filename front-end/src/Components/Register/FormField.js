import React, { useState } from "react";

export default function FormField(props) {
  const { placeholder, data, error, type, handleInput, name } = props;
  const [isValid, setIsValid] = useState(true);

  function checkIfValid(input) {
      if (input === "") {
          setIsValid(false)
          return
      }
      setIsValid(true)
  }

  return (
    <div className="Input-aux">
      {isValid ? null : <div className="Register-input-error">{error}</div>}
      <input
        value={data}
        className="Register-input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
            handleInput({ [name]: e.target.value })
            checkIfValid(e.target.value)
        }}
      />
    </div>
  );
}
