import { useContext, useState, useEffect } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { RiCoinsLine } from "react-icons/ri";
import { UserContext } from "../components/contexts/UserContext";
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData, postLogin } = useContext(UserContext);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <Sidebar
        username={userData.userProfile.profile.firstname}
        image={userData.userProfile.profile.picture}
      />

      <div className="cards">
        <Card
          title="Exchange Currency"
          details="Exchange money from one local currency to another"
          image={<RiCoinsLine />}
        />
        <Card
          title="Get an Accomodation"
          details="Find the best accomodation at affordable price"
          image={<RiCoinsLine />}
        />
        <Link to="/explore">
          <Card
            title="Explore your destination"
            details="Get relevant information about any country and community"
            image={<RiCoinsLine />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
