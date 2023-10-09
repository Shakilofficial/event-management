import { Link } from "react-router-dom";
import login_banner from "../../assets/images/Login.png";
import Navbar from "../../components/Navbar/Navbar";
const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
              <img className="w-full md:w-[420px]" src={login_banner} alt="" />
              <div>
        <div className="px-10 py-5 rounded-md mx-auto shadow-lg">
          <h2 className="text-4xl text-center font-semibold mb-16">
            Login your account
          </h2>
          <hr />
          <form className="my-10">
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
                <a href="#" className="label-text-alt text-lg link link-hover">
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
          <p className="text-center font-semibold text-lg">
            Do not Have An Account? 
            <Link className="text-cyan-500 ml-2" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Login;
