import {
  Box,
  Grid,
  GridItem,
  HStack,
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

function App() {
  const { data: quote, isLoading } = useQuote();

  if (isLoading) return <Spinner />;

  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="tomato"></GridItem>
      <GridItem colSpan={3}>
        <Text maxWidth={500} fontSize={20}>
          {quote?.Quote}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <VStack>
          <BookInfo bookName={quote?.BookName} authorName={quote?.AuthorName} />
          <Box marginX={4}>
            <EditButton />
            <LikeComponent />
            <NextButton />
          </Box>
        </VStack>
      </GridItem>
      <GridItem colSpan={5} bg="tomato"></GridItem>
    </Grid>

    //     <VStack>
    //       <HStack>
    //       </HStack>
    //       <HStack>
    //         <Text textColor={"gray.600"} fontSize={"15px"}>
    //           {quote?.DateAdded}
    //         </Text>
    //         {/* <DeleteButton /> */}
    //       </HStack>
    //     </VStack>
  );
}

export default App;
