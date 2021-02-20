import React from "react";
import { motion } from "framer-motion";

const images = [
  // "01_almond.png",
  // "cafe.png",
  // "elebass.jpg",
  // "himeji.jpg",
  // "mirror.jpg",
  // "nabana2.jpg",
  // "umeshu.jpg",
  "03_sunset.jpg",
  // "contrabass.jpg",
  // "headphone.jpg",
  "midosuji.jpg",
  // "nabana.jpg",
  // "sandanbeki.jpg",
  // "02_garden.jpg",
  // "church.png",
  // "hashikui.jpg",
  // "lemon.jpg",
  // "mitarai_keikoku.jpg",
  // "osaka.jpg",
  // "xmas_tree.jpg",
];

const Home = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        y: "-100vh",
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      style={{
        height: "100%",
        backgroundImage: `url(/images/${images[0]})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  );
};

export default Home;
