import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";
import EventServices from "../../components/EventServices/EventServices";

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="my-24">
        <div className="w-auto text-center mx-auto">
          <h3 className="text-cyan-500 text-5xl font-bold mb-5">Our Services : <span className="text-rose-500"> Elevate Your Events</span></h3>
          <p className="text-lg mb-10">
          Discover a world of event possibilities with our comprehensive event planning and management services. From concept to execution, we specialize in crafting unforgettable experiences tailored to your unique vision. Whether it's a corporate gathering, a wedding celebration, or a special occasion, our team is dedicated to turning your dreams into reality. Explore our range of services and let us make your next event a resounding success.
          </p>
        </div>
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <EventServices key={service.id} service={service}></EventServices>
          ))}
        </div>
      </div>
      <Gallery></Gallery>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;
