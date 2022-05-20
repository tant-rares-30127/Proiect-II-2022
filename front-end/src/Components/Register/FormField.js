import React, { useState } from "react";

export default function FormField(props) {
  const { placeholder, data, error, type, handleInput, name, regex } = props;
  const [isValid, setIsValid] = useState(true);

  console.log(name + " " + regex);

  function checkIfValid(input) {
    if (input.match(regex) === null) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
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
          e.target.value.match(regex) === null
            ? handleInput({ [name]: "" })
            : handleInput({ [name]: e.target.value });
          checkIfValid(e.target.value);
        }}
      />
    </div>
  );
}
