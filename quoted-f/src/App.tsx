import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import "./App.css";
import BookInfo from "./Components/BookInfo";
import EditButton from "./Components/EditButton";
import LikeButton from "./Components/LikeButton";
import NextButton from "./Components/NextButton";

function App() {
  return (
    <Box className="centered-container">
      <VStack>
        <HStack>
          <Text maxWidth={500} fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            enim nec nisi blandit interdum.
          </Text>
          <BookInfo />
        </HStack>
        <HStack>
          <Text textColor={"gray.600"} fontSize={"15px"}>
            Added on 7th of April 2023
          </Text>
          <Box marginX={4}>
            <LikeButton />
            <EditButton />
            <NextButton />
          </Box>
          {/* <DeleteButton /> */}
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;
