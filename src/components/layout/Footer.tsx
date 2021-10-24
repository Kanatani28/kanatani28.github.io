import React from "react";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  const commonProps = {
    fontSize: "0.5em",
    py: 3
  }
  return (
    isMobile ? <Box as="footer" {...commonProps} pl={3} >Copyright ©maroKanatani. All Rights Reserved.</Box> :
      <Center as="footer" {...commonProps} justifyContent="flex-end">Copyright ©maroKanatani. All Rights Reserved.</Center>
  )
}

export default Footer;
