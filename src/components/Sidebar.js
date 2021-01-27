import { useState } from "react";
import me from "../assets/Me.jpg";
import { BiMenuAltRight } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FcSafe } from "react-icons/fc";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BiNotification } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";

function Sidebar(props) {
  const [visible, setVisible] = useState(true);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="sidebar">
      <section className="sidebar__flex">
        <img src={props.image} />
        <p>Hey {props.username}</p>
        <BiMenuAltRight className="sidebar__menuicon" onClick={toggleMenu} />
      </section>

      <div className={visible ? "sidebar__menuitems" : null}>
        <p>
          <span>
            <FaHome />
          </span>
          My Listings
        </p>
        <p>
          <span>
            <AiOutlineHeart />
          </span>
          Accomodation Interests
        </p>
        <p>
          <span>
            <FcSafe />
          </span>
          Transactions
        </p>
        <p>
          <span>
            <BiUserCircle />
          </span>
          Profile
        </p>
        <p>
          <span>
            <FiSettings />
          </span>
          Settings
        </p>
        <p>
          <span>
            <BiNotification />
          </span>
          Notifications
        </p>
        <p>
          <span>
            <BiLogOutCircle />
          </span>
          Logout
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
