import type { NextPage } from 'next';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuItem,
  MenuList,
  UnorderedList,
  ListItem,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import { Example } from './Example';
import {
  IconBusiness,
  IconGlob,
  IconHealth,
  IconHome,
} from '../components/icons';

const Home: NextPage = () => {
  return (
    <Box>
      <Grid
        templateAreas={`"nav header"
                  "nav main"
                  "footer footer"`}
        gridTemplateRows={'80px 1fr 100px'}
        gridTemplateColumns={'260px 1fr'}
        h="100vh"
        gap="4"
        fontWeight="bold"
      >
        <GridItem p="4" area={'header'}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Flex>
              <Input placeholder="Search for news" />
            </Flex>
            <Flex />
          </Grid>
        </GridItem>
        <GridItem p="4" area={'nav'}>
          <Box mb={6}>
            <Heading color={'brand.500'} size={'md'}>
              Daily News
            </Heading>
          </Box>

          <UnorderedList listStyleType={'none'} pl={0} ml={0}>
            <ListItem>
              <Flex p={2} gap={4}>
                <IconHome />
                Top Stories
              </Flex>
            </ListItem>
            <ListItem>
              <Flex p={2} gap={4}>
                <IconGlob />
                Around the World
              </Flex>
            </ListItem>
            <ListItem>
              <Flex p={2} gap={4}>
                <IconBusiness />
                Business
              </Flex>
            </ListItem>
            <ListItem>
              <Flex p={2} gap={4}>
                <IconHealth />
                Health
              </Flex>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem p="4" area={'main'}>
          <Heading mb={6} size={'md'}>
            Top Stories for you
          </Heading>
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem colSpan={4}>
              <Box maxW="32rem">
                <Heading size={'md'} mb={2}>
                  Modern online and offline payments for Africa
                </Heading>
                <Text size={'md'}>
                  Paystack helps businesses in Africa get paid by anyone,
                  anywhere in the world
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box maxW="32rem">
                <Heading size={'md'} mb={2}>
                  Modern online and offline payments for Africa
                </Heading>
                <Text size={'md'}>
                  Paystack helps businesses in Africa get paid by anyone,
                  anywhere in the world
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box maxW="32rem">
                <Heading size={'md'} mb={2}>
                  Modern online and offline payments for Africa
                </Heading>
                <Text size={'md'}>
                  Paystack helps businesses in Africa get paid by anyone,
                  anywhere in the world
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem p="4" bg="blue.300" area={'footer'}>
          Footer
        </GridItem>
      </Grid>
      <Example />
    </Box>
  );
};

export default Home;
