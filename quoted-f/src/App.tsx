import {
  Box,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import BookInfo from "./Components/BookInfo";
import EditButton from "./Components/EditButton";
import LikeComponent from "./Components/LikeComponent";
import NextButton from "./Components/NextButton";
import useQuote from "./hooks/useQuotes";
import { useQuoteContext } from "./hooks/quoteProvidet";

function App() {
  const { quote, isLoading, error, refetch } = useQuoteContext();

  if (isLoading) return <Spinner />;
  if (error || !quote) throw error;

  return (
    <Grid
      h="600px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
    >
      {/* <GridItem colSpan={5} bg="tomato">Header</GridItem> */}
      <GridItem rowSpan={2} colSpan={1} bg="tomato">
        Menu
      </GridItem>
      <GridItem className="centered-container" colSpan={4}>
        <VStack>
          <Text maxWidth={500} fontSize={20}>
            {quote?.Quote}
          </Text>
          <Text marginY={4} textColor={"gray.600"} fontSize={"15px"}>
            Added on {quote?.DateAdded}
          </Text>
        </VStack>
      </GridItem>
      <GridItem className="centered-container" colSpan={2}>
        <SimpleGrid columns={1} spacing={"5px"}>
          <BookInfo bookName={quote?.BookName} authorName={quote?.AuthorName} />
          <Box marginY={4}>
            <EditButton />
            <LikeComponent quoteId={quote.id} likes={quote?.Likes} />
            <NextButton onClick={refetch} />
          </Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
