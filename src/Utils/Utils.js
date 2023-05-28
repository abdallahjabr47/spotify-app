import { lazy } from "react";
import Home from "../Pages/Home/Home";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PersonIcon from '@mui/icons-material/Person';
import IsAuth from "../Components/IsAuth/IsAuth";

const Search = lazy(() => import("../Pages/Search/Search"));
const YourLibrary = lazy(() => import("../Pages/YourLibrary/YourLibrary"));
const AboutMe = lazy(() => import("../Pages/AboutMe/AboutMe"));

export const routeNames = {
  HOME: "Home",
  SEARCH: "Search",
  YOUR_LIBRARY: "Your Library",
  ABOUT_ME: "About Me",
  PROFILE: "Profile",
};

export const routes = [
  {
    path: "/",
    title: routeNames.HOME,
    component: <IsAuth><Home /></IsAuth>,
    icon: <HomeIcon className="sidebarOptionIcon"  />,
  },
  {
    path: "/Search",
    title: routeNames.SEARCH,
    component: <IsAuth><Search /></IsAuth>,
    icon: <SearchIcon className="sidebarOptionIcon" />
  },
  {
    path: "/YourLibrary",
    title: routeNames.YOUR_LIBRARY,
    component: <IsAuth><YourLibrary /></IsAuth>,
    icon: <LibraryMusicIcon className="sidebarOptionIcon"  />
  },
  {
    path: "/AboutMe",
    title: routeNames.ABOUT_ME,
    component: <IsAuth><AboutMe /></IsAuth>,
    icon: <PersonIcon className="sidebarOptionIcon"  />
  },
];