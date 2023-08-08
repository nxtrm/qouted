import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import BookInfo from "../Components/BookInfo";
import EditButton from "../Components/EditButton";
import ErrorComponent from "../Components/ErrorComponent";
import LikeComponent from "../Components/LikeComponent";
import NextButton from "../Components/NextButton";
import { useQuoteContext } from "../hooks/quoteProvider";
import "./styles.css";

function HomePage() {
  const { quote, isLoading, error, refetch } = useQuoteContext();

  if (isLoading) return <Spinner />;
  if (error || !quote) return <ErrorComponent error={error} />;

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
    >
      <GridItem gridColumnEnd={6} className="centered-container" colSpan={4}>
        <VStack>
          <Text maxWidth={500} fontSize={20}>
            {quote.Quote}
          </Text>
          <Text marginY={4} textColor={"gray.600"} fontSize={"15px"}>
            Added on {quote.DateAdded}
          </Text>
        </VStack>
      </GridItem>
      <GridItem gridColumnStart={6} className="centered-container" colSpan={2}>
        <SimpleGrid columns={1} spacing={"5px"}>
          <BookInfo />
          <Box marginY={4}>
            <EditButton />
            <LikeComponent />
            <NextButton onClick={refetch} />
          </Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
