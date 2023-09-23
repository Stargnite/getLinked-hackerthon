import Logo from "./../../../public/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper text-white">
      <div className="footer flex pt-9">
        <div className="remark max-w-sm">
          <img src={Logo} alt="" className="mb-2 logo" />
          <p className="text">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <div className="text terms-of-use flex pt-10">
            terms of Use
            <div className="policy-line w-1 mx-2 rounded-xl bg-primary "></div>
            Privacy Policy
          </div>
        </div>
        <div className="links-wrapper">
          <h1 className=" text text-primary text-xl font-bold">Useful links</h1>
          <div className="links flex flex-col text">
            <a href="" className="mb-2 text">overview</a>
            <a href=""className="mb-2 text">Timeline</a>
            <a href=""className="mb-2 text">FAQs</a>
            <a href=""className="mb-2 text">Register</a>
            <div className="icons">
              <p className="text-primary text">Follow us</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <h1 className="text-primary font-bold pb-4 text text-xl">Contact Us</h1>
          <div className="number">
            <p className="text pb-4">+234 6707653444</p>
          </div>
          <div className="w-32">
            <p className="text">27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="text-center text py-7 ">All rights reserved. © getlinked Ltd.</div>
    </div>
  );
};

export default Footer;
