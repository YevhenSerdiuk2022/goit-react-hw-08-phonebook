import desk from "../../images/desk.jpeg";
import {Text, Container, Box, Heading, Stack, useColorMode } from "@chakra-ui/react";

const HomePage = () => {
  const {colorMode} = useColorMode();
  return (
    <Container maxW="960px">
      <Box padding="4" color="black">
        <Stack spacing={6}>
          <Heading as="h2" size="lg" color={colorMode === 'dark' ? 'white' : 'black'}>
            Welcome
          </Heading>
          <img src={desk} alt="" />
          <Text color={colorMode === 'dark' ? 'white' : 'black'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            laboriosam placeat incidunt rem illum animi nemo quibusdam quia
            voluptatum voluptate.
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};
export default HomePage;
