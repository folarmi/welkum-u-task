import { useState, useEffect, useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

function Universities() {
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Sidebar
        username={userData.userProfile.profile.firstname}
        image={userData.userProfile.profile.picture}
      />

      <p>Welcome to universities</p>
    </div>
  );
}

export default Universities;
