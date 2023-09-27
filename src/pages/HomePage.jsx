// import { motion, useInView, useAnimation } from "framer-motion";
// import { useRef, useEffect } from "react";
import "./homepage.css";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Guidelines from "../components/Guidelines/Guidelines";
import Criteria from "../components/Criteria/Criteria";
import Faqs from "../components/Faqs/Faqs";
import Timeline from "../components/Timeline/Timeline";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Terms from "../components/Terms/Terms";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   // Activate animation
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    // <div className="" ref={ref}>
      <div>
        <Hero />
        <Intro />
        <Guidelines />
        <Criteria />
        <Faqs id="faq" />
        <Timeline id="timeline" />
        <Prizes />
        <Sponsors />
        <Terms />
        <Footer />
      </div>
    // </div>
  );
};

export default HomePage;
