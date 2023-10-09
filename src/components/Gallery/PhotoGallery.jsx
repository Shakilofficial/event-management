import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery5.jpg";
import img6 from "../../assets/images/gallery6.jpg";

const PhotoGallery = () => {
  useEffect(() => {
		AOS.init();
	}, []);
  return (
    <div className="my-24 text-center">
      <h3 className="text-cyan-500 text-5xl font-bold mb-8"data-aos="fade-right">Gallery</h3>
      <h4 className="text-2xl mb-5 font-semibold" data-aos="fade-up">
        Explore memories and moments in our <span className="text-cyan-500">successful</span> event gallery.
      </h4>
      <div className="container mx-auto px-5 py-2 lg:px-2">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2" >
              <img src={img1} data-aos="fade-right"/>
            </div>
            <div className="w-1/2 p-1 md:p-2" >
              <img src={img2} data-aos="fade-left" />
            </div>
            <div className="w-full p-1 md:p-2" >
              <img src={img3} data-aos="fade-left"/>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2" >
              <img src={img4} data-aos="fade-right"/>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img src={img5} data-aos="fade-up"/>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img src={img6} data-aos="fade-down"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
