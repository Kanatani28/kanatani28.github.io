import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInterval } from "@chakra-ui/react";
import usePageVisibility from "../../hooks/usePageVisibility";

const randomImages = () => {
  const images = [
    "elebass.jpg",
    "03_sunset.jpg",
    "contrabass.jpg",
    "headphone.jpg",
    "midosuji.jpg",
    "nabana.jpg",
    "mirror.jpg",
    "nabana2.jpg",
    "sandanbeki.jpg",
    "hashikui.jpg",
    "osaka.jpg",
  ];
  for (let i = images.length; 1 < i; i--) {
    let k = Math.floor(Math.random() * i);
    [images[k], images[i - 1]] = [images[i - 1], images[k]];
  }
  return images;
};

const Home = () => {
  const images = randomImages();
  const [dispImages, setDispImages] = useState<string[]>(images);

  const [height, setHeight] = useState<number>(0);
  const isPageVisible: boolean = usePageVisibility();
  useInterval(() => {
    if (!isPageVisible) {
      return;
    }
    setHeight(height + 2);
    console.log(height);
    if (height % 5800 === 0) {
      setDispImages([...dispImages, ...images]);
    }
  }, 100);

  return (
    <>
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
        }}
      >
        {dispImages.map((image, i) => (
          <motion.div
            key={`image-${i}`}
            initial={false}
            animate={{
              y: `-${height}px`,
            }}
            transition={{
              // duration: 20,
              repeat: Infinity,
            }}
            style={{
              height: "100%",
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
              backgroundSize: "cover",
            }}
          ></motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Home;
