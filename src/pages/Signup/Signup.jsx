import { Link } from "react-router-dom";
import signUp_photo from '../../assets/images/Signup.png'
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="px-4 w-full mx-auto my-2 flex flex-col md:flex-row gap-4 justify-center items-center">
              <div>
                  <img className="w-full md:w-[400px]" src={signUp_photo} alt="" />
              </div>
        <div className="px-10 py-6 shadow-lg">
          <h2 className="text-4xl rounded-md text-center font-semibold mb-16">
            Register your account
          </h2>
          <hr />
          <form className="my-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn text-lg capitalize font-semibold btn-neutral">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-lg">
            Already Have An Account? Please
            <Link className="text-cyan-500 ml-2" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
        </div>
    );
};

export default Signup;