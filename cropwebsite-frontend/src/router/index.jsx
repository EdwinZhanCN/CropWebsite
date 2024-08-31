import * as React from "react";
import About from "@/components/About";
import Main from "@/components/Main";
import NavBar from "@/components/general-components/NavBar";
import Contact from "@/components/Contact";
import Product from "@/components/Product";
import Origin from "@/components/Origin";
import News from "@/components/News";
import Service from "@/components/Service";


// Define the routes
const router = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/origin",
        element: <Origin />,
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/service",
        element: <Service />,
    }
];

export default router;


