import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./Auth";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const postLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.welkom-u.ca/WelkomU_Test/api/ProfileManagement/LoginUser",
        {
          email,
          password,
        }
      )
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data.result.authToken);
          setisLoggedIn(true);
          setUserData(result.data.result);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        isLoggedIn,
        postLogin,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
