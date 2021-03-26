/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import HomePage from "views/HomePage.js";
import World from "views/World.js";
import Business from "views/Business.js";
import Sports from "views/Sports.js";
import Technology from "views/Technology.js";
import Maps from "views/Maps.js";
import Entertainment from "views/Entertainment.js";

const dashboardRoutes = [
  
  {
    path: "/home-page",
    name: "Recent News",
    icon: "nc-icon nc-chart-pie-35",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/world",
    name: "World",
    icon: "nc-icon nc-planet",
    component: World,
    layout: "/admin",
  },
  {
    path: "/business",
    name: "Business",
    icon: "nc-icon nc-bag",
    component: Business,
    layout: "/admin",
  },
  {
    path: "/sports",
    name: "Sports",
    icon: "nc-icon nc-paper-2",
    component: Sports,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Technology",
    icon: "nc-icon nc-atom",
    component: Technology,
    layout: "/admin",
  },
  {
    path: "/entertainment",
    name: "Entertainment",
    icon: "nc-icon nc-bell-55",
    component: Entertainment,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
];

export default dashboardRoutes;
