import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import "./App.css";
import BookInfo from "./Components/BookInfo";
import EditButton from "./Components/EditButton";
import LikeButton from "./Components/LikeButton";
import NextButton from "./Components/NextButton";
import useQuote from "./hooks/useQuotes";

function App() {
  const { data: quote, isLoading } = useQuote();

  if (isLoading) return <Spinner />;

  return (
    <Box className="centered-container">
      <VStack>
        <HStack>
          <Text maxWidth={500} fontSize={20}>
            {quote?.Quote}
          </Text>
          <BookInfo bookName={quote?.BookName} authorName={quote?.AuthorName} />
        </HStack>
        <HStack>
          <Text textColor={"gray.600"} fontSize={"15px"}>
            {quote?.DateAdded}
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
