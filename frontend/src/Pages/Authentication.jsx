import React, { useState } from 'react'
import './CSS/Authen.css'
const Authentication = () => {

  const [state, setState] = useState("Login");
  
  const login = async () =>{
    console.log("Login Function Exe")
    
  }
  const signup = async () =>{
    console.log("Sign Up Function Exe")
  }

  return (
    <div className="authen">
      <div className="container">
        <h1>{state}</h1>
        <div className="field">
          {state==="Sign Up"?<input type="text" placeholder='Your Name' />: <></>}
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={ ()=> { state==="Login"? login():signup()}}>Continue</button>
        {state==="Sign Up"?
          <p className="loginmess">
          Already have an account? 
          <span onClick={ ()=> {setState("Login")}}> Login</span>
        </p>:
          <p className="loginmess">
          Create an account? 
          <span onClick={()=>{setState("Sign Up")}}> Click here</span>
        </p>

        }
        <div className="signupagree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Authentication