import React, {useState} from "react";
import './css/style.css';
import './fonts/material-icon/css/material-design-iconic-font.css';
import Notification from '../../../Components/Notification';
import {Redirect} from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState("password");
  const [open, setOpen] = React.useState(false);
  const [notification, setNotification] = React.useState("");
const [errorType,setErrorType] = React.useState('success');
const _showPassword = () =>{
  if(showPassword === "password"){
    setShowPassword("text");
  }
  else {
    setShowPassword("password");
  }
}
  const loggedIn = localStorage.getItem("loggedIn");

  function loggedInfunc() {
    if (email === "abc" && password === "123") {
      localStorage.setItem("type", "WizMeAdmin");
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", "tokenavailable");
      setOpen(true);
      setErrorType('success');
      setNotification('Login Successfully');
      setTimeout(() => {
        window.location.reload();  
    }, 1500);
      
    }
    else{  
      setNotification("Error while logging in");
      setOpen(true);
      setErrorType('error')
      setTimeout(() => {
        setOpen(false); 
    }, 2000);
    }
  }

  if (!loggedIn) {
    return (
      <div className="main signIn_signUp">
        <Notification open={open} type={errorType}
        message={notification}
        />
      <section className="signup">
          <div className="container">
              <div className="signup-content">
                  <form className="signup-form">
                      <h2 className="form-title">Login</h2>
                      <div className="form-group">
                          <input type="email" className="form-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                      </div>
                      <div className="form-group">
                          <input type={showPassword} className="form-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                          <span className="zmdi zmdi-eye field-icon toggle-password" onClick={()=>_showPassword()}></span>
                      </div>
                      <div className="form-group">
                          <input type="button" onClick={loggedInfunc} name="submit" className="form-submit" value="Sign In"/>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  </div>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
}
