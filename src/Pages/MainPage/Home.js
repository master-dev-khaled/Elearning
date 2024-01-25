import React, { useEffect, useRef } from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Carousel from "./Layout/Carousel/Carousel";
import ServiceBoad from "./Components/ServiceBoard";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import { motion, useAnimation, useInView } from "framer-motion";
const Home = () => {
  const homeRef = useRef();
  const pageLoaded = useInView(homeRef, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (pageLoaded) {
      controls.start("visible");
    }
  }, [pageLoaded]);
  return (
    <motion.div
      ref={homeRef}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      transition={{ duration: 0.3 }}
      animate={controls}
    >
      <Carousel />
      <ServiceBoad />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </motion.div>
  );
};
export default Home;