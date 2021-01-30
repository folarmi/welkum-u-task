import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../components/contexts/UserContext";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userData?.authToken) window.location.replace("/home");
  }, [userData?.authToken, history]);

  const postLogin = (loginDetails) => {
    axios
      .post(
        "https://api.welkom-u.ca/WelkomU_Test/api/ProfileManagement/LoginUser",
        loginDetails
      )
      .then((result) => {
        setUserData(result.data.result);
        localStorage.setItem("userData", JSON.stringify(result.data.result));
        history.push("/home");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div className="login">
      <header className="login__header">
        <img src="" alt="" />
        <h1>Start the life,career you desire with ease.</h1>
      </header>

      <section className="login__form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postLogin(loginDetails);
          }}
        >
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={loginDetails.password}
            name="password"
            onChange={handleChange}
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
