import { FaDollarSign, FaRegCalendarCheck } from "react-icons/fa";
import { FaArrowLeft, FaPeopleGroup } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));
  console.log(service);
  const { title, img, description, price, availableDate, attendance } = service;

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <div className="space-y-5">
        <h2 className="text-center text-5xl font-bold text-rose-500">
          {title}
        </h2>
        <img className="border border-rose-300" src={img} alt="" />
        <div className="p-4">
          <p className="text-lg font-extralight mt-2">{description}</p>
        </div>
        <div className="flex px-4 justify-between">
          <p className="flex justify-center items-center gap-4 text-2xl">
            <FaRegCalendarCheck /> {availableDate}{" "}
          </p>
          <p className="flex justify-center items-center gap-4 text-2xl">
            {" "}
            <FaPeopleGroup />
            {attendance}
          </p>
        </div>
        <div className="flex px-4 justify-between">
          <p className="flex justify-center items-center gap-4 text-2xl">
            <FaDollarSign /> {price}
          </p>
          <Link to="/">
            <button className="flex justify-center items-center gap-2 px-4 text-lg font-semibold py-2 text-white bg-cyan-500 rounded-md">
              {" "}
              <FaArrowLeft></FaArrowLeft> Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
