import Banner from "../../components/Banner/Banner";
import PhotoGallery from "../../components/Gallery/PhotoGallery";
import Team from "../../components/Team/Team";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Service></Service>
      <PhotoGallery></PhotoGallery>
      <Team></Team>
    </div>
  );
};

export default Home;
