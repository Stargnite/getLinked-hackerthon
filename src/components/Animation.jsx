import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Animation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    // Activate animation
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");

    }
  }, [isInView, mainControls]);

  return (
    <div className="" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 0.7, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
