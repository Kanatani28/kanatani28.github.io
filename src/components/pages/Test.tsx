import React from "react";
import { motion } from "framer-motion";
import { pagingAnimationProps } from "../../animations";

const Test = () => (
  <motion.div
    {...pagingAnimationProps}
    style={{ height: "100%", backgroundColor: "pink" }}
  >
    <motion.h1 {...pagingAnimationProps}>Test</motion.h1>
    <div>あああああああああああああ</div>
  </motion.div>
);

export default Test;
