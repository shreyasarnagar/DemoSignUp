import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  const [username,setusername] = useState("Username");
  const [email,setemail] = useState("Email");
  const [password,setpassword] = useState("Password");
  const [confirmpass,setconfirmpass] = useState("Confirm Password");  
  return (
    <div className="main">
      <div className="leftreal">
        <h2>Create new account.</h2>

        <div className="redirect">
          <p>Already have an account?</p>
          <a href='#'>Log In</a>
        </div>
    
        <div className="account">
          <a className='google' href='#'>
            <FaGoogle />
          </a>
          <a className='facebook' href='#'>
            <FaFacebookF />
          </a>
          <a className='apple' href='#'>
            <FaApple />
          </a>
        </div>
      </div>

      <form className="right">
        <div>
          <label for="username">Username</label>
          <br/>
          <input type="text" id="username" name="username" required minlength="2" placeholder={username} onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div>
          <label for="mail">Email</label>
          <br/>
          <input type="email" id="mail" name="mail" required placeholder={email} onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div>
          <label for="pass">Password</label>
          <br/>
          <input type="password" id="pass" name="pass" required minlength="2" placeholder={password} onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <div>
          <label for="confirmpass">Confirm Password</label>
          <br/>
          <input type="password" id="confirmpass" name="confirmpass" required minlength="2" placeholder={confirmpass} onChange={(e) => setconfirmpass(e.target.value)}/>
        </div>
          <button type="submit" id="done">Submit</button>
      </form>

      <div className="left">
        <h2>Create new account.</h2>

        <div className="redirect">
          <p>Already have an account?</p>
          <a href='#'>Log In</a>
        </div>
    
        <div className="account">
          <a className='google' href='#'>
            <FaGoogle />
          </a>
          <a className='facebook' href='#'>
            <FaFacebookF />
          </a>
          <a className='apple' href='#'>
            <FaApple />
          </a>
        </div>
      </div>
      </div>
  )
}

export default Signup