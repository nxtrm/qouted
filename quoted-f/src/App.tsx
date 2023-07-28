import { Box, Text, HStack, Heading, Button, VStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Box className="centered-container">
      <VStack>
        <HStack>
          <Text maxWidth={"500px"} fontSize={"20px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
            nunc dolor, vel tincidunt ipsum dictum et.
          </Text>
          <VStack>
            <Heading textColor={"gray.300"} fontSize={18}>
              Book Name
            </Heading>
            <Heading textColor={"gray.500"} fontSize={17}>
              Author Name
            </Heading>
          </VStack>
        </HStack>

        <HStack>
          <Button />
          <Button />
          <Text textColor={"gray.500"} fontSize={"1xl"}>
            Added on 7th of April 2023
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;
