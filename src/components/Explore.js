import { useContext, useState, useEffect } from "react";
import DestinationCard from "../DestinationCard";
import img from "./../assets/Me.jpg";
import Sidebar from "./Sidebar";
import { UserContext } from "../components/contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { FaUniversity } from "react-icons/fa";
import me from "../assets/Me.jpg";

function Explore() {
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const country =
    userData.userProfile.profile.immigrationInformation.destinationCountry;
  const province = userData.userProfile.profile.immigrationInformation.province;
  const city = userData.userProfile.profile.immigrationInformation.city;

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  //   const getUniversities = () => {
  //     axios
  //       .get(
  //         `https://cors-anywhere.herokuapp.com/https://api.welkom-u.ca/WelkomU_Test/api/UniversityManagement/GetAllUniversity+ProvinceValue=${province}+CityValue=${city}+PageSize=2+CurrentPage={1}`
  //       )
  //       .then((res) => {
  //         const universities = res.data;
  //         console.log(universities);
  //       });
  //   };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="explore">
      <Sidebar
        username={userData.userProfile.profile.firstname}
        image={userData.userProfile.profile.picture}
      />

      <div className="header">
        <h3>Welcome to the explore page</h3>
      </div>
      <div className="explore__gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>

      <main className="explorers">
        <section className="explore__dest">
          <h4>Main Destination</h4>
          <DestinationCard
            location="Canada"
            city="New Brunswick,Fredericton"
            className="active"
          />

          <h4>Other destinations</h4>
          <DestinationCard location="Canada" city="New Brunswick,Fredericton" />
          <DestinationCard location="Canada" city="New Brunswick,Fredericton" />
          <DestinationCard location="Canada" city="New Brunswick,Fredericton" />
        </section>

        <section className="explore__city">
          <div className="explore__immigrate">
            <div className="city__details">
              <h3>{country}</h3>
              <small>
                province:
                {province}
              </small>
              <br />
              <small>City: {city}</small>
            </div>

            <div className="change__button">
              <button type="submit">Change Location</button>
            </div>
          </div>

          <section className="explore__option">
            <Link to="/universities">
              <DestinationCard
                location="Universities"
                city="Explore your universities"
                flag={<FaUniversity />}
              />
            </Link>
            <DestinationCard location="Colleges" city="Find top colleges" />

            <DestinationCard location="First Friend" city="Help on arrival" />
            <DestinationCard location="Airport Pickup" city="Book a ride" />
            <DestinationCard location="Food" city="Satisfy your taste buds" />
            <DestinationCard location="Top Activities" city="Must do" />
          </section>
        </section>
      </main>
    </div>
  );
}

export default Explore;
