import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: "My Listings",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Accomodation Interests",
    path: "/interests",
    icon: <AiIcons.AiOutlineHeart />,
    cName: "nav-text",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <FcIcons.FcSafe />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BiIcons.BiUserCircle />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <BiIcons.BiNotification />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <BiIcons.BiLogOutCircle />,
    cName: "nav-text",
  },
];
