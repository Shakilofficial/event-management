import { useEffect, useState } from "react";
import EventServices from "../../components/EventServices/EventServices";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <div className="my-24 px-4">
        <div className="w-auto text-center mx-auto">
          <h3 className="text-cyan-500 text-5xl font-bold mb-5">
            Our Services :
            <span className="text-rose-500"> Elevate Your Events</span>
          </h3>
          <p className="text-lg mb-10">
            Discover a world of event possibilities with our comprehensive event
            planning and management services. From concept to execution, we
            specialize in crafting unforgettable experiences tailored to your
            unique vision. Whether it's a corporate gathering, a wedding
            celebration, or a special occasion, our team is dedicated to turning
            your dreams into reality. Explore our range of services and let us
            make your next event a resounding success.
          </p>
        </div>
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <EventServices key={service.id} service={service}></EventServices>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;
