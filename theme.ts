import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const styles = {
  //@ts-ignore
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('#072D4B', '#F4F9F8')(props),
      bg: mode('#F4F9F8', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
};
const colors = {
  brand: {
    100: '#D5F5FE',
    200: '#ABE7FE',
    300: '#81D3FC',
    400: '#62BFFA',
    500: '#2F9FF8',
    600: '#227CD5',
    700: '#175CB2',
    800: '#0E418F',
    900: '#092E77',
  },
};
const theme = extendTheme({
  config,
  styles,
  colors,
});

export default theme;
