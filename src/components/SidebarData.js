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
    path: "/",
    icon: <AiIcons.AiOutlineHeart />,
    cName: "nav-text",
  },
  {
    title: "Transactions",
    path: "/",
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
    path: "/",
    icon: <FiIcons.FiSettings />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/",
    icon: <BiIcons.BiNotification />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <BiIcons.BiLogOutCircle />,
    cName: "nav-text",
  },
];
