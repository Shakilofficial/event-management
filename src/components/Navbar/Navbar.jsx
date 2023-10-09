import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        toast("Log Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="mr-2 text-md md:text-lg font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 text-lg font-semibold">
        <NavLink to="/service">Service</NavLink>
      </li>
      <li className="mr-2 text-lg font-semibold">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="h-20 w-20" src={logo} alt="" />
        <span>
          <a className="text-lg md:text-xl font-bold">CrispBerry</a>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks} </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          {user && user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              title={user.displayName}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-[#01a0b1] rounded-lg font-semibold text-lg text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 bg-[#01a0b1] rounded-lg font-semibold text-lg text-white">
              Sign In
            </button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
