import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/service",
                element: <Service></Service>
            },
            {
                path: "",
                element: <Gallery></Gallery>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element:<Login></Login>
            }
        ]
    }
])
export default router;