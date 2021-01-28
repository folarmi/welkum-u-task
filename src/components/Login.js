import { useContext, useState, useEffect } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoggedIn,
    postLogin,
  } = useContext(UserContext);

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login">
      <header className="login__header">
        <img src="" alt="" />
        <h1>Start the life,career you desire with ease.</h1>
      </header>

      <section className="login__form">
        <form onSubmit={postLogin}>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <small>
            <button className="button__link"> Forgot password?</button>
          </small>
          <br />
          <button type="submit" className="signIn__button">
            Sign In
          </button>
          <p>
            Don't have an account?
            <span>
              <small>
                <button className="button__link">Sign up now</button>
              </small>
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
