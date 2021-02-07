import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      'html, body, #root': {
        fontSize: 'sm',
        color: 'gray.600',
        lineHeight: 'tall',
        height: '100%'
      },
      '#root': {
        padding: '3rem'
      }
      // a: {
      //   color: "teal.500",
      // },
    }
  }
}

export default extendTheme(theme)
