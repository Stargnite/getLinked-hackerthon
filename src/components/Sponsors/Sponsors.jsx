import "./sponsors.css";
import Company1 from "./../../../public/company1.png";
import Company2 from "./../../../public/company2.png";
import Company3 from "./../../../public/company3.png";
import Company4 from "./../../../public/company4.png";

const Sponsors = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col items-center pb-10">
        <h2 className="text-center mt-36 text-3xl text-stone-100 font-bold">
          Partners and Sponsors
        </h2>
        <p className="text-center my-4 text-stone-100 ">
          Getlinked Hackathon 1.0 is honored to have the following <br /> major
          companies as its partners and sponsors
        </p>
      </div>

      <div className="companies-wrapper flex items-center">
        <div className="companies flex items-center justify-between flex-wrap max-w-screen-sm">
          <img src={Company1} alt="" className="self-center company" />
          <img src={Company2} alt="" className="self-center company" />
          <img src={Company3} alt="" className="self-center company" />
          <img src={Company4} alt="" className="self-center company" />
          <p className="text-white text-4xl">
            Pay<span className="text-blue-500">box</span>
          </p>
          <p className="text-white text-4xl">
            Vuzual <span className="text-red-500">Plus</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
