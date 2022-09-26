import { Box, Button, Heading, useColorMode } from '@chakra-ui/react';

export const Example = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Heading bg={'brand.100'}>Hello there</Heading>
      <Button variant={{ base: 'base', md: 'md', color: 'link' }}>
        Object syntax
      </Button>

      <Box bg="brand.100">Hello</Box>
    </header>
  );
};
