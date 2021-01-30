import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
