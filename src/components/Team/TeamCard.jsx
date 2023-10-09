import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

const TeamCard = ({ team }) => {
    const { name, image, designation, description } = team;
  return (
    <div>
      <div className="h-[480px] w-[380px] shadow-md rounded-md border-2 border-r-cyan-300 p-8 space-y-2 text-center hover:bg-cyan-50">
        <div className="flex justify-center items-center mb-8">
          <img className="h-24 w-24 rounded-full" src={image} alt="" />
        </div>
              <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-lg font-semibold text-cyan-500">{designation}</h5>
        <p>
          {description}
        </p>
        <div className="flex justify-center items-center gap-2 text-xl text-cyan-500">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            {" "}
            <FaInstagram />
          </a>
          <a href="#">
            {" "}
            <FaTwitter />
          </a>
        </div>
        <Link>
          <button className="mt-4 px-3 py-2 bg-cyan-300 rounded-md text-sm font-semibold hover:bg-cyan-500">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
