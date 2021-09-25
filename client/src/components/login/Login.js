import React from "react";

export default function Login() {
  
  return (
    <div className="loginContainer">
      <div className="login">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>Login</div>
            </div>
            <div className="flip-card-back">
            <div className="margin">Email:</div>
              <input className="margin"></input>
              <div className="margin">Password:</div>
              <input className="margin"></input>
              <button className="margin">Let's Go!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>Signup</div>
            </div>
            <div className="flip-card-back">
            <div className="margin">First Name:</div>
              <input className="margin"></input>
              <div className="margin">Last Name:</div>
              <input className="margin"></input>
              <div className="margin">Email:</div>
              <input className="margin"></input>
              <div className="margin">Password:</div>
              <input className="margin"></input>
              <div className="margin">Confirm Password:</div>
              <input className="margin"></input>
              <button className="margin">Let's Go!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
