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
import Dashboard from "views/Dashboard.js";
import World from "views/World.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Technology from "views/Technology.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Recent News",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "World",
    icon: "nc-icon nc-planet",
    component: World,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Business",
    icon: "nc-icon nc-bag",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Sports",
    icon: "nc-icon nc-paper-2",
    component: Typography,
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
    path: "/notifications",
    name: "Entertainment",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
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
