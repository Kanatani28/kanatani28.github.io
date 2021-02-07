import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Icon } from '@chakra-ui/react'
import routes from '../../routes'

import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { SiHatenabookmark } from 'react-icons/si'
import { IconType } from 'react-icons/lib'

const MenuButton = ({ children }: { children : string | JSX.Element }) => (
    <Box p={3} opacity={0.7} _hover={{ opacity: 1 }}>{children}</Box>
)

const ShareButton = () => (
    <>
    <MenuButton>
    <Popover placement="right">
    <PopoverTrigger>
        <a>
        Share
        </a>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Share please</PopoverHeader>
        <PopoverBody>
            {socials.map(social => (
                <SocialButton key={social.url} { ...social } />
            ))}
        </PopoverBody>
    </PopoverContent>
    </Popover>
    </MenuButton>
    </>
)

type SnsType = {
    url: string
    icon: {
        color: string
        type: IconType
    }
}
const socials: SnsType[] = [
  {
    url: 'https://twitter.com/share?url=localhost:3000&via=maroKanatani&related=maroKanatani&hashtags=hashtag,hashtag2&text=リンクテキスト',
    icon: {
      color: 'blue.400',
      type: FaTwitterSquare
    }
  },
  {
    url: 'http://www.facebook.com/share.php?u={URL}',
    icon: {
      color: 'blue.700',
      type: FaFacebookSquare
    }
  },
  {
    url: 'http://b.hatena.ne.jp/add?mode=confirm&url={URL}&title={ページのタイトル}',
    icon: {
      color: 'blue.500',
      type: SiHatenabookmark
    }
  }
]

const SocialButton = ({ url, icon }: SnsType) => (
    <a href={url}
        rel="nofollow noreferrer"
        target="_blank"
    >
        <Icon w={12} h={12} color={icon.color} as={icon.type} />
    </a>
)

const SideMenu = React.memo(() =>
    <Flex direction="column" h="100%" justifyContent="flex-end" pb={3} bgColor="yellow">
        <nav>
            <ul style={{ listStyle: 'none' }}>
                {routes.map(route => (
                    <li key={route.path}>
                        <Link to={route.path}>
                            <MenuButton>{route.name}</MenuButton>
                        </Link>
                    </li>
                ))}
                <li>
                    <ShareButton />
                </li>
            </ul>
        </nav>
    </Flex>
)

export default SideMenu
