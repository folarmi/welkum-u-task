import { useContext, useState, useEffect } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { RiCoinsLine } from "react-icons/ri";
import { UserContext } from "../components/contexts/UserContext";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useContext(UserContext);

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
    <div className="home">
      <Sidebar
        username={userData.userProfile.profile.firstname}
        image={userData.userProfile.profile.picture}
      />

      <div className="cards">
        <div className="bar">
          <p>sidebar</p>
        </div>

        <Card
          title="Exchange Currency"
          details="Exchange money from one local currency to another"
          image={<RiCoinsLine />}
          myColor="#f9e6c9"
        />
        <Card
          title="Get an Accomodation"
          details="Find the best accomodation at affordable price"
          image={<RiCoinsLine />}
          myColor="#80a7b4"
        />
        <Link to="/explore">
          <Card
            title="Explore your destination"
            details="Get relevant information about any country and community"
            image={<RiCoinsLine />}
            myColor="#c1e8de"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
