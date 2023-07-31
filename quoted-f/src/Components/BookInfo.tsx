import { VStack, Heading } from "@chakra-ui/react";

const BookInfo = () => {
  return (
    <VStack>
      <Heading textColor={"gray.300"} fontSize={18}>
        Book Name
      </Heading>
      <Heading textColor={"gray.500"} fontSize={17}>
        Author Name
      </Heading>
    </VStack>
  );
};

export default BookInfo;
