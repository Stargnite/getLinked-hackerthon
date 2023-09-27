import "./sponsors.css";
import Company1 from "./../../../public/company1.png";
import Company2 from "./../../../public/company2.png";
import Company3 from "./../../../public/company3.png";
import Company4 from "./../../../public/company4.png";
import SponsorsImg from "./../../../public/sponsors.svg";
import Animation from "../Animation";

const Sponsors = () => {
  return (
    <Animation>
      <div className="flex items-center flex-col sponsors">
        <div className="flex flex-col items-center pb-10">
          <h2 className="text-center mt-36 text-3xl text-stone-100 font-bold">
            Partners and Sponsors
          </h2>
          <p className="text-center my-4 text-stone-100 ">
            Getlinked Hackathon 1.0 is honored to have the following <br />{" "}
            major companies as its partners and sponsors
          </p>
        </div>

        <div className="companies-wrapper flex items-center">
          <div className="companies flex items-center pt-7">
            <img src={SponsorsImg} alt="" className="sponsors-img" />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Sponsors;
