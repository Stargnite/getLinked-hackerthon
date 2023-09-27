import { useState } from "react";
import Logo from "./../../../public/logo.svg";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";
import ToggleNav from "./../../../public/toggleNav.svg";
// import './registerpage.css'
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navIsActive, setNavIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
    cancelNav();
    console.log("clicked-register");
  };

  const toggleNav = () => {
    setNavIsActive(!navIsActive);
  };

  const cancelNav = () => {
    setNavIsActive(false);
  };

  return (
    <nav className="">
      <div className="large-nav flex justify-between">
        <div className="logo large-logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <ul className=" flex items-center justify-between">
          <Link className="nav_link border normal-link">
            <ReactScrollLink to="timeline" smooth={true} duration={1000}>
              <li>Timeline</li>
            </ReactScrollLink>
          </Link>
          <Link className="nav_link border normal-link">
            <li>Overview</li>
          </Link>
          <Link className="nav_link border normal-link">
            <ReactScrollLink to="faq" smooth={true} duration={1000}>
              <li>FAQs</li>
            </ReactScrollLink>
          </Link>
          <Link to="/contact" className="nav_link border normal-link">
            Contact
          </Link>
          <NavLink
            to="/register"
            className={`nav_link border flex items-center register_btn ${
              isActive && "active"
            }`}
            onClick={handleActive}
          >
            Register
          </NavLink>
        </ul>
      </div>

      <div className="small-nav flex justify-around">
        {!navIsActive && (
          <div className="flex justify-between items-center">
            <div className="small-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>

            <div className="nav-btn" onClick={toggleNav}>
              <img src={ToggleNav} alt="" />
            </div>
          </div>
        )}

        {navIsActive && (
          <div className="flex flex-col nav-drop">
            <div className="cancel text-white text-3xl" onClick={cancelNav}>
              X
            </div>
            <ul className=" flex flex-col text-center">
              <Link
                className="text-white float-left mb-5 text-left"
                to="timeline"
                smooth={true}
                duration={1000}
              >
                <li onClick={cancelNav}>Timeline</li>
              </Link>
              <Link className="text-white float-left mb-5 text-left">
                <li onClick={cancelNav}>Overview</li>
              </Link>
              <Link className="text-white float-left mb-5 text-left">
                <li onClick={cancelNav}>FAQs</li>
              </Link>
              <Link className="text-white float-left mb-5 text-left">
                <li onClick={cancelNav}>Contact</li>
              </Link>
              <Link
                to="/register"
                className={`nav_link register_btn ${isActive && "active"}`}
                onClick={handleActive}
              >
                Register
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
