import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Header = () => (
  <Box ml="auto" as="header" flex="1" style={{ writingMode: "vertical-rl" }}>
    <Heading>
      <motion.div
        initial={{ y: "-50vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        maroKanatani
      </motion.div>
    </Heading>
  </Box>
);

export default Header;
