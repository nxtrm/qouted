import { HStack, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import BookInfo from "../Components/BookInfo";
import { useQuoteContext } from "../hooks/quoteProvider";
import "./styles.css";

const LibraryPage = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) throw error; //for testing purposes

  return (
    <SimpleGrid py={5} columns={3}>
      {/* <Heading py={5} gridColumn={2}>
        Library
      </Heading> */}
      <Box py={10} width={"700px"} gridColumnStart={2}>
        <HStack gap={8}>
          <Text maxWidth={500} fontSize={20}>
            {quote.Quote}
          </Text>
          <BookInfo />
        </HStack>
      </Box>
    </SimpleGrid>
  );
};

export default LibraryPage;
