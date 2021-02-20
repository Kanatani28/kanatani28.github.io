import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body, #root": {
        fontSize: "sm",
        color: "gray.600",
        lineHeight: "tall",
        height: "100%",
        overflow: "hidden",
      },
      "#root": {
        padding: "3rem",
      },
    },
  },
};

export default extendTheme(theme);
