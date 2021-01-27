import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { Redirect } from "react-router-dom";

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
            name=""
            id=""
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
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <small>
            <a href=""> Forgot password?</a>
          </small>
          <br />
          <button type="submit">Sign In</button>
          <p>
            Don't have an account?
            <span>
              <small>
                <a href="">Sign up now</a>
              </small>
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
