import React from 'react'

export default function FormFields() {
  return (
    <form className='Register-form'>
        <div className="Register-input-container">
          <input
            className="Register-input"
            type="text"
            placeholder="Full Name"
          />
          <input className="Register-input" type="text" placeholder="Email" />
          <input
            className="Register-input"
            type="password"
            placeholder="Password"
          />
          <input
            className="Register-input"
            type="number"
            placeholder="Answer"
          />
        </div>
        <span className='Form-important-text'>
          <input type="checkbox" />
          <label>I agree to the processing of my personal data</label>
        </span>
        <button className='Auth-btn'>Register</button>
      </form>
  )
}
