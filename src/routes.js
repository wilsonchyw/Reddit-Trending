// import
import { HomeIcon } from "components/Icons/Icons";
import React from "react";
import Dashboard from "views/Dashboard/Dashboard.js";


var dashRoutes = [
    {
        path: "/",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
        layout: "/",
    }
];
export default dashRoutes;
