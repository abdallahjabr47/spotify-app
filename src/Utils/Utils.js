import { lazy } from "react";
import Home from "../Pages/Home/Home";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

const Search = lazy(() => import("../Pages/Search/Search"));
const YourLibrary = lazy(() => import("../Pages/YourLibrary/YourLibrary"));
const AboutMe = lazy(() => import("../Pages/AboutMe/AboutMe"));
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));

export const routeNames = {
  HOME: "Home",
  SEARCH: "Search",
  YOUR_LIBRARY: "Your Library",
  ABOUT_ME: "About Me",
  ABOUT_US: "About US",
};

export const routes = [
  {
    path: "/",
    title: routeNames.HOME,
    component: <Home />,
    icon: <HomeIcon className="sidebarOptionIcon"  />,
  },
  {
    path: "/Search",
    title: routeNames.SEARCH,
    component: <Search />,
    icon: <SearchIcon className="sidebarOptionIcon" />
  },
  {
    path: "/YourLibrary",
    title: routeNames.YOUR_LIBRARY,
    component: <YourLibrary />,
    icon: <LibraryMusicIcon className="sidebarOptionIcon"  />
  },
  {
    path: "/AboutMe",
    title: routeNames.ABOUT_ME,
    component: <AboutMe />,
    icon: <PersonIcon className="sidebarOptionIcon"  />
  },
  {
    path: "/AboutUs",
    title: routeNames.ABOUT_US,
    component: <AboutUs />,
    icon: <InfoIcon className="sidebarOptionIcon"  />
  },
];