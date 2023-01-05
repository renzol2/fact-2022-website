import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#fffdf7',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#354427',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#648C8E',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    factturquoise: '#648C8E',
    darkturquoise: '#404F65',
    green: '#354427',
    tan: '#9A7771',
    factyellow: '#EECD7E',
    brown: '#B97452',
    darkbrown: '#91583b',
    black: '#16161D',
    backgroundgray: '#E9E9E9',
    white: '#fffdf7',
    auburn: '#A64B1E'
  },
  fonts,
  components: {
    Button: {
      baseStyle: {
        boxShadow: 'md',
      },
    },
  },
});

export default theme;
