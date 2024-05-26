import React from 'react'
import './CSS/Authen.css'
const Authentication = () => {
  return (
    <div className="authen">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginmess">
          Already have an account? 
          <span>Login</span>
        </p>
        <div className="signupagress">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Authentication