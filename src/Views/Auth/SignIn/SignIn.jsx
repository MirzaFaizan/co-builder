import React, {useState} from "react";
import './css/style.css';
import './fonts/material-icon/css/material-design-iconic-font.css';
import Notification from '../../../Components/Notification';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import setAuthorizationToken,{ getJwt} from '../../../Context/SetAuthHeaders';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState("password");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const token = localStorage.getItem("token");

  function loggedInfunc() {
    if (email === "" || password === "") {
      setNotification("Please enter email and password");
      setOpen(true);
      setErrorType('error')
      setTimeout(() => {
        setOpen(false); 
    }, 2000);
    }
    else{
      setLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      const body = { email, password };
    
      return axios
        .post(`user/signin`, body, config)
        .then(res => {
           localStorage.setItem("type", "WizMeAdmin");
      localStorage.setItem("token", res.data.Token);
      setAuthorizationToken();
      setOpen(true);
      setLoading(false);
      setErrorType('success');
      setNotification('Login Successfully');
      setTimeout(() => {
        window.location.reload();  
    }, 2000);
        
        })
        .catch(err => {
          setLoading(false);
             setNotification("Email or Password Incorrect");
      setOpen(true);
      setErrorType('error');
      setTimeout(() => {
        setOpen(false); 
    }, 2000);
    }
        );
    }
  }

  if (token == undefined) {
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
                          <button type="button" onClick={loggedInfunc} name="submit" className="form-submit">
                           {loading ? (
                             <div class="spinner-border text-light" role="status">
                             <span class="sr-only">Loading...</span>
                           </div>
                           ):(
                            "Sign In"
                           )}  
                            </button>
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
