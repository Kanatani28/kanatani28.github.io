import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";

const NotFound = () => {

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
        <Heading as="h3">Not Found.</Heading>
      </motion.div>
    </>
  );
};

export default NotFound;
