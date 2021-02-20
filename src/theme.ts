import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body, #root": {
        fontSize: "sm",
        color: "gray.600",
        lineHeight: "tall",
        height: "100%",
      },
    },
  },
};

export default extendTheme(theme);
