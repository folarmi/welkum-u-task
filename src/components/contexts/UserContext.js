import { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const history = useHistory();

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

  return (
    <UserContext.Provider
      value={{
        postLogin,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
