import { FaDollarSign } from "react-icons/fa";
import { FaPeopleGroup, FaRegCalendarCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventServices = ({ service }) => {
  const { id, title, img, description, price, availableDate, attendance } =
    service;
  return (
    <div className="shadow-md max-w-[380px] border-y-2">
      <div className="">
        <img className="border border-rose-300 h-72" src={img} alt="" />
        <div className="p-4 space-y-4 text-center mt-5">
          <h3 className="text-lg font-semibold text-rose-500">{title}</h3>
          <p className="text-xs font-extralight">{description} </p>
          <div className="flex justify-between gap-5">
            <p className="flex justify-center items-center gap-3">
              {" "}
              <FaPeopleGroup /> {attendance}{" "}
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaRegCalendarCheck />
              {availableDate}
            </p>
          </div>
          <div className="flex justify-between items-center gap-5">
            <p className="flex justify-center items-center gap-3">
              {" "}
              <FaDollarSign /> {price}
            </p>
            <Link to={`/service/${id}`}>
              <button className="px-2 py-1 bg-rose-500 rounded-md text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventServices;
