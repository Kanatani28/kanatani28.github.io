import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Center,
  Fade,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { pagingAnimationProps } from "../../animations";

const images = [
  "01_almond.png",
  "cafe.png",
  "elebass.jpg",
  "himeji.jpg",
  "mirror.jpg",
  "nabana2.jpg",
  "umeshu.jpg",
  "03_sunset.jpg",
  "contrabass.jpg",
  "headphone.jpg",
  "midosuji.jpg",
  "nabana.jpg",
  "sandanbeki.jpg",
  "02_garden.jpg",
  "church.png",
  "hashikui.jpg",
  "lemon.jpg",
  "mitarai_keikoku.jpg",
  "osaka.jpg",
  "xmas_tree.jpg",
];

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("before: " + count);
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount((c) => c + 1); // ✅ This doesn't depend on `count` variable outside
      }

      console.log("result: " + count);
    }, 2000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <motion.div
      {...pagingAnimationProps}
      style={{ height: "100%", backgroundColor: "orange" }}
      onAnimationComplete={() => console.log("End")}
    >
      <Flex h="100%" direction="column" bg="green.500">
        <Center flex="1">
          <Box boxSize="lg">
            <Image src={`/images/${images[count]}`} alt={images[count]} />
          </Box>
        </Center>
        {/* {images.map(image => (
          <Center key={image} flex="1">
            <Box boxSize="lg">
              <Image src={`/images/${image}`} alt={image} />
            </Box>
          </Center>
        ))} */}
      </Flex>
    </motion.div>
  );
};

export default Home;
