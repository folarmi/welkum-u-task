import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./Auth";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // const [setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  const postLogin = (loginDetails) => {
    axios
      .post(
        "https://api.welkom-u.ca/WelkomU_Test/api/ProfileManagement/LoginUser",
        loginDetails
      )
      .then((result) => {
        console.log(result);
        setAuthTokens(result.data.result.authToken);
        setisLoggedIn(true);
        setUserData(result.data.result);
        // setIsError(true);
      });
    // .catch((e) => {
    //   setIsError(true);
    // });
  };

  return (
    <UserContext.Provider
      value={{
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
