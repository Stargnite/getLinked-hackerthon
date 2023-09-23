import "./terms.css";
import security from "./../../../public/security.png";
import SVG from "./../../../public/securitysvg.svg";

const Terms = () => {
  return (
    <div className="terms flex items-center justify-between">
      <div className="total-text text-white">
        
        <h1 className="text-4xl font-bold mb-6">Privacy Policy and <br /><span className="text-primary">Terms</span></h1>
        <div className="date text-gray-400 mb-6">Last updated on September 12, 2023</div>
        <p className="header">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>

        <div className="main-text flex flex-col">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h1 className="policy text-primary mt-6 font-bold">Licensing Policy</h1>
          <h1 className="terms-list-header font-bold mb-4">
            Here are terms of our Standard License:
          </h1>
          <div className="list leading-7">
            <p className="item mb-6">
            *  The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
            <p className="item">
            *  You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>

          <button className="register_btn text-white mt-7 self-center ml-0">Read More</button>
        </div>
      </div>
      <div className="security-img flex">
        <img src={SVG} alt="" className="padlock-svg" />
        <img src={security} alt="" className="padlock-man" />
      </div>
    </div>
  );
};

export default Terms;
