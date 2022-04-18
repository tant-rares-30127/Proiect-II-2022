import React from 'react'
import FormFieldsLogin from './FormFieldsLogin'


export default function Login() {
  return (
    <div className='Login-body-container-main'>
      <div className='Login-body-container'>
      <FormFieldsLogin/>
      <a className="Login-input-container" href="/">
         <button className="Login-btn">Log in</button>  
      </a>
      <span className="Forget-pass">
        <a href="/register">FORGET THE PASSWORD?</a>
      </span>
      </div>
      <div className = 'Rectangle-shape'/>
      <div className='Login-body-container'>
      <div className='Login-text-container'  >
        <div className="Login-title-form-container">
          <h2 className="Login-title-form-container">Don't you have an account</h2>
        </div>
        <div>
           <p className = 'Login-text'>
           Become a community member to unlock features 
           </p> 
           <p className = 'Login-text'>
           that are only for registered users 
           </p> 
        </div> 
        <a className="Login-input-container" href="/register">
         <button className="Authentif-btn">Make a new account</button>  
        </a>
        </div>
      </div>
      </div>
     
  
   
   
  )
}
