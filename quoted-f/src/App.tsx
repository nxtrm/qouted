import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import EditButton from "./Components/EditButton";
import LikeButton from "./Components/LikeButton";
import BookInfo from "./Components/BookInfo";

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
          <LikeButton />
          <EditButton />
          <Text textColor={"gray.500"} fontSize={"ls"}>
            Added on 7th of April 2023
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;