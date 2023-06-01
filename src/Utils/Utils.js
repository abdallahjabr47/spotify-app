import { lazy } from "react";
import Home from "../Pages/Home/Home";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PersonIcon from '@mui/icons-material/Person';
import IsAuth from "../Components/IsAuth/IsAuth";
import CategoryIcon from '@mui/icons-material/Category';
import AlbumIcon from '@mui/icons-material/Album';

const Search = lazy(() => import("../Pages/Search/Search"));
const YourLibrary = lazy(() => import("../Pages/YourLibrary/YourLibrary"));
const AboutMe = lazy(() => import("../Pages/AboutMe/AboutMe"));
const BrowseCategories = lazy(() => import("../Pages/BrowseCategories/Browse"));
const Albums = lazy(() => import("../Pages/Albums/Albums"));

export const routeNames = {
  HOME: "Home",
  SEARCH: "Search",
  YOUR_LIBRARY: "Your Library",
  ABOUT_ME: "About Me",
  BROWSE_CATEGORIES: "Browse Categories",
  ALBUMS: "Albums",
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
    path: "/BrowseCategories",
    title: routeNames.BROWSE_CATEGORIES,
    component: <IsAuth><BrowseCategories /></IsAuth>,
    icon: <CategoryIcon className="sidebarOptionIcon"  />
  },
  {
    path: "/Albums",
    title: routeNames.ALBUMS,
    component: <IsAuth><Albums /></IsAuth>,
    icon: <AlbumIcon className="sidebarOptionIcon"  />
  },
  {
    path: "/AboutMe",
    title: routeNames.ABOUT_ME,
    component: <IsAuth><AboutMe /></IsAuth>,
    icon: <PersonIcon className="sidebarOptionIcon"  />
  },
];