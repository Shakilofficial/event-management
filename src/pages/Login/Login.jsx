import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import login_banner from "../../assets/images/Login.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, googleSingIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Login success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login success");
      })
      .catch((error) => {
        console.error(error)
      });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <img className="w-full md:w-[420px]" src={login_banner} alt="" />
        <div>
          <div className="px-10 py-5 rounded-md mx-auto shadow-lg">
            <h2 className="text-4xl text-center font-semibold mb-16">
              Login your account
            </h2>
            <hr />
            <form onSubmit={handleLogin} className="my-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label mt-2">
                  <a
                    href="#"
                    className="label-text-alt text-lg link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-lg capitalize font-semibold btn-neutral">
                  Login
                </button>
              </div>
            </form>
            <div className="mb-4 flex justify-center items-center">
              <button
                onClick={handleGoogleSingIn}
                className="flex justify-center items-center gap-4 px-8 py-2 bg-cyan-500 text-white rounded-md text-xl text-center font-semibold"
              >
                Sign In With
                <FaGoogle />
              </button>
            </div>
            <p className="text-center font-semibold text-lg">
              Do not Have An Account?
              <Link className="text-cyan-500 ml-2" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
