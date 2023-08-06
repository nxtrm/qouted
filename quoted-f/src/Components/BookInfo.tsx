import { VStack, Heading } from "@chakra-ui/react";
import { useQuoteContext } from "../hooks/quoteProvidet";

const BookInfo = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) throw error;

  return (
    <VStack>
      <Heading maxWidth={200} textColor={"gray.300"} fontSize={18}>
        {quote.BookName}
      </Heading>
      <Heading textColor={"gray.500"} fontSize={17}>
        {quote.AuthorName}
      </Heading>
    </VStack>
  );
};

export default BookInfo;
