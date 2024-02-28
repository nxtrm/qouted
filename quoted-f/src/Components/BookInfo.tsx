import { VStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { useQuoteContext } from "../hooks/quoteProvider";

const BookInfo = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) throw error;

  const text = useColorModeValue('gray.600', 'gray.300')
  return (
    <VStack>
      <Heading maxWidth={200} textColor={text} fontSize={18}>
        {quote.BookName}
      </Heading>
      <Heading textColor={"gray.500"} fontSize={17}>
        {quote.AuthorName}
      </Heading>
    </VStack>
  );
};

export default BookInfo;
