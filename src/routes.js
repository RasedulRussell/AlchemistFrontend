
import HomePage from "views/HomePage.js";
import World from "views/World.js";
import Business from "views/Business.js";
import Sports from "views/Sports.js";
import Technology from "views/Technology.js";
import Maps from "views/Maps.js";
import Entertainment from "views/Entertainment.js";
import Bangladesh from "views/Bangladesh.js";
import Others from "views/Others.js";
import Search from "views/Search";

const dashboardRoutes = [
  
  {
    path: "/home-page",
    name: "Recent News",
    icon: "nc-icon nc-chart-pie-35",
    component: HomePage,
    layout: "/news",
  },
  {
    path: "/world",
    name: "World",
    icon: "nc-icon nc-planet",
    component: World,
    layout: "/news",
  },
  {
    path: "/bangladesh",
    name: "Bangladesh",
    icon: "nc-icon nc-paper-2", ///<i class="flag flag-bangladesh"></i>
    component: Bangladesh,
    layout: "/news",
  },
  {
    path: "/business",
    name: "Business",
    icon: "nc-icon nc-bag",
    component: Business,
    layout: "/news",
  },
  {
    path: "/sports",
    name: "Sports",
    icon: "nc-icon nc-paper-2",
    component: Sports,
    layout: "/news",
  },
  {
    path: "/technology",
    name: "Technology",
    icon: "nc-icon nc-atom",
    component: Technology,
    layout: "/news",
  },
  {
    path: "/entertainment",
    name: "Entertainment",
    icon: "nc-icon nc-camera-20",
    component: Entertainment,
    layout: "/news",
  },
  {
    path: "/search/:query",
    name: "Search",
    icon: "nc-icon nc-camera-20",
    component: Search,
    layout: "/news",
  },
  {
    path: "/others",
    name: "Others",
    icon: "nc-icon nc-paper-2",
    component: Others,
    layout: "/news",
  },
  
];

export default dashboardRoutes;
