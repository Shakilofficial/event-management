import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Team></Team>
            <div>
            </div>
        </div>
    );
};

export default Home;
