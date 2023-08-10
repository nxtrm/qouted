import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuoteContext } from "../hooks/quoteProvider";
import "./styles.css";

const LibraryPage = () => {
  //for testing purposes
  let quoteList: string[] = [
    "64d1e49a7e5e8e0f32664651",
    "64d1e49a7e5e8e0f32664652",
    "64d1e49a7e5e8e0f32664653",
    "64d1e49a7e5e8e0f3266464f",
  ];

  const QuoteCard = ({ quoteId }: { quoteId: string }) => {
    const { quote, error } = ;
    if (error || !quote) throw error;

    return (
      <Box gridColumnStart={2} py={10} width={"700px"}>
        <Text>{quote?.Quote}</Text>
      </Box>
    );
  };

  return (
    <SimpleGrid py={5} columns={3}>
      {quoteList.map((quoteId) => (
        <QuoteCard key={quoteId} quoteId={quoteId} />
      ))}
    </SimpleGrid>
  );
};

export default LibraryPage;
