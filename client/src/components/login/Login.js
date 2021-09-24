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
              <div>Back</div>
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
              <div>Back</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
