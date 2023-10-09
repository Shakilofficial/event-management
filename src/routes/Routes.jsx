import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import ServiceDetails from "../components/EventServices/ServiceDetails";
import Root from "../layouts/Root";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Service from "../pages/Service/Service";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/event.json"),
      },
      {
        path: "/service",
        element: (
          <PrivateRoute>
            {" "}
            <Service></Service>
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
