import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero rounded-lg min-h-[700px] bg-[url('/src/assets/images/banner.jpg')]">
        <div className="hero-overlay rounded-lg bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-16 text-4xl font-bold">
              Experience Extraordinary Events with <br />
              <span className="mb-6 text-7xl font-extrabold text-cyan-400">
                CrispBerry Events
              </span>
            </h1>
            <p className="my-10 text-lg">
              Explore our services, get inspired by our portfolio, and let's
              embark on a journey of creativity and celebration together. At
              CrispBerry Events, we believe that every moment is worth
              celebrating, and we're here to make your celebrations
              extraordinary.
            </p>
            <p className="text-lg mb-10">Your journey begins here with us.</p>
            <Link to="/signup">
              <button className="btn btn-accent btn-outline text-lg">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
