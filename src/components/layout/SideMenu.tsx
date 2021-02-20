import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Icon,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import routes from "../../routes";

import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { SiHatenabookmark } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { motion, MotionProps } from "framer-motion";

const MenuButton = ({ children }: { children: string | JSX.Element }) => (
  <Box p={3} opacity={0.7} _hover={{ opacity: 1 }}>
    {children}
  </Box>
);

const ShareButton = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <MenuButton>
        <Popover placement={isMobile ? "top" : "right"}>
          <PopoverTrigger>
            <button style={{ outline: "none" }}>Share</button>
          </PopoverTrigger>
          <PopoverContent w={isMobile ? "auto" : "75%"}>
            <PopoverArrow />
            <PopoverBody>
              <Flex direction={isMobile ? "column" : "row"}>
                {socials.map((social, i) => (
                  <>
                    <SocialButton key={social.url} {...social} />
                    {i !== socials.length - 1 && <Spacer />}
                  </>
                ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </MenuButton>
    </>
  );
};

type SnsType = {
  url: string;
  icon: {
    color: string;
    type: IconType;
  };
};
const socials: SnsType[] = [
  {
    url:
      "https://twitter.com/share?url=localhost:3000&via=maroKanatani&related=maroKanatani&hashtags=hashtag,hashtag2&text=リンクテキスト",
    icon: {
      color: "blue.400",
      type: FaTwitterSquare,
    },
  },
  {
    url: "http://www.facebook.com/share.php?u={URL}",
    icon: {
      color: "blue.700",
      type: FaFacebookSquare,
    },
  },
  {
    url:
      "http://b.hatena.ne.jp/add?mode=confirm&url={URL}&title={ページのタイトル}",
    icon: {
      color: "blue.500",
      type: SiHatenabookmark,
    },
  },
];

const SocialButton = ({ url, icon }: SnsType) => (
  <a href={url} rel="nofollow noreferrer" target="_blank">
    <Icon w={12} h={12} color={icon.color} as={icon.type} />
  </a>
);

const menuAnimation: (i: number) => MotionProps = (i) => {
  return {
    initial: { y: `20vh`, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, delay: i * i * 0.1 },
  };
};

const SideMenu = React.memo(() => {
  return (
    <Flex direction="column" h="100%" justifyContent="flex-end" pb={3}>
      <nav>
        <ul style={{ listStyle: "none" }}>
          {routes.map((route, i) => (
            <li key={route.path}>
              <motion.div {...menuAnimation(i)}>
                <Link to={route.path}>
                  <MenuButton>{route.name}</MenuButton>
                </Link>
              </motion.div>
            </li>
          ))}
          <li>
            <motion.div {...menuAnimation(routes.length)}>
              <ShareButton />
            </motion.div>
          </li>
        </ul>
      </nav>
    </Flex>
  );
});

export default SideMenu;
