import React from "react";
import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import Sidebar from "./Sidebar";

function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <Sidebar
        username={userData.userProfile.profile.firstname}
        image={userData.userProfile.profile.picture}
      />
      <p>This is the profile page</p>
    </div>
  );
}

export default Profile;
