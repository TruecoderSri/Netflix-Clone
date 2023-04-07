import React, { useState } from "react";
import "./loginscreen.css";
import Signupscreen from "./Signupscreen";

function Login() {
  const [signin, setsignin] = useState(false);

  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png"
          alt="logo"
        />
        <button
          onClick={() => {
            setsignin(true);
          }}
          className="sign-In"
        >
          Sign-in
        </button>
        <div className="login-gradient" />
      </div>
      <div className="login-body">
        {signin ? (
          <Signupscreen />
        ) : (
          <>
            <h1>Unlimited movies,Tv Shows and much more...</h1>
            <h2>Watch anywhere.Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="login-input">
              <form>
                <input type="email" placeholder="email-Address" />
                <button
                  className="get-started_btn"
                  onClick={() => {
                    setsignin(true);
                  }}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
