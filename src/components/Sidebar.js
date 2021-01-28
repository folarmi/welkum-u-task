// import { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";

// function Sidebar(props) {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);
//   return (
//     <>
//       <div className="navbar">
//         <Link to="#">
//           <FaIcons.FaBars onClick={showSidebar} className="menu" />
//         </Link>
//       </div>
//       <nav className={sidebar ? "nav__menu active" : "nav-menu"}>
//         <ul className="nav__menu__items" onClick={showSidebar}>
//           <li className="navbar__toggle">
//             <Link to="#" className="menu__bars">
//               <AiIcons.AiOutlineClose />
//             </Link>
//           </li>
//           <div className="user__info">
//             <img src={props.image} alt="userimage" />
//             <p>Hey {props.username}</p>
//           </div>

//           {SidebarData.map((item, index) => {
//             return (
//               <li key={index} className={item.cName}>
//                 <Link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// }
// export default Sidebar;

import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu__bars">
          <FaIcons.FaBars onClick={showSidebar} className="menu" />
        </Link>
      </div>
      <nav className={sidebar ? "nav__menu active" : "nav__menu"}>
        <ul className="nav__menu__items" onClick={showSidebar}>
          <li className="navbar__toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose className="menu" />
            </Link>
          </li>
          <div className="user__info">
            <img src={props.image} alt="userimage" />
            <h2>Hey {props.username}</h2>
          </div>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
