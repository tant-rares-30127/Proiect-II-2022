import React from 'react'
import FormFieldsLogin from './FormFieldsLogin'


export default function Login() {
  return (
    <div className='Login-body-container'>
    <FormFieldsLogin/>
    <span className="Forget-pass">
      <a href="/register">forget the password?</a>
      </span>
     
      <div className="Login-title-form-container">
          <h2>Don't you have an account</h2>
      </div>
        <p className='Login-content-text'>
         Become a community member to unlock features 
          that are only for registered users 
          </p>
        <a className="Login-input-container" href="/register">
      <button className="Authentif-btn">Make a new account</button>  
      </a>

    </div>    
   
  )
}
