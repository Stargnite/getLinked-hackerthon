import "./hero.css";
import underline from "./../../../public/underline.svg";
// import hero_bg from "./../../../public/hero_bg.svg";
import vr_man from './../../../public/man-wearing-smart-glasses-touching-virtual-screen1.png'
import Globe from './../../../public/globe-light.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero_container">
      {/* <div >
      <img src={hero_bg} alt="" className="hero_bg" />
    </div> */}
      <h2 className="mt-7 mr-16 ignite">
        Igniting a Revolution in HR Innovation
      </h2>
      <div className="underliner ">
        <img src={underline} />
      </div>

      <div className="hero_wrapper flex justify-around">
        <div className="hero_content">
          <h1 className="text-6xl font-bold tracking-tight">
           <span className="whitespace-nowrap">getLinked Tech</span> <br /> Hackerthon<span className="version">1.0</span>
          </h1>
          <p className="mb-4">
            Participate in getLinkedtech Hackerthon 2023 and stand
          a chance to win a Big prize
          </p>
          <Link to="/register">
          <button className="register_btn  text-white text-2xl m-0 mt-4 mb-12">
            Register
          </button>
          </Link>
          <div className="count_down mt-4">
            <div className="count pr-4">
              <span className="zeros text-5xl">00</span>
              <p>H</p>
            </div>
            <div className="count pr-4">
              <span className="zeros text-5xl">00</span>
              <p>M</p>
            </div>
            <div className="count ">
              <span className="zeros text-5xl">00</span>
              <p>S</p>
            </div>
          </div>
        </div>
        <div className="hero_imgs">
        <img src={vr_man} alt="" className="w-53 h-auto" />
        <img src={Globe} alt="" className=" globe" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
