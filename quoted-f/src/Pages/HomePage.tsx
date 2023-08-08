import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./HomePage.css";
import BookInfo from "../Components/BookInfo";
import EditButton from "../Components/EditButton";
import LikeComponent from "../Components/LikeComponent";
import NextButton from "../Components/NextButton";
import { useQuoteContext } from "../hooks/quoteProvider";
import HeadingMenu from "../Components/HeadingMenu";
import ErrorComponent from "../Components/ErrorComponent";

function HomePage() {
  const { quote, isLoading, error, refetch } = useQuoteContext();

  if (isLoading) return <Spinner />;
  if (error || !quote) return <ErrorComponent error={error} />;

  return (
    <Grid
      h="600px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <HeadingMenu />
      </GridItem>

      <GridItem className="centered-container" colSpan={4}>
        <VStack>
          <Text maxWidth={500} fontSize={20}>
            {quote.Quote}
          </Text>
          <Text marginY={4} textColor={"gray.600"} fontSize={"15px"}>
            Added on {quote.DateAdded}
          </Text>
        </VStack>
      </GridItem>
      <GridItem className="centered-container" colSpan={2}>
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
