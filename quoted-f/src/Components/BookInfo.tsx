import { VStack, Heading } from "@chakra-ui/react";

interface Props {
  bookName: string | undefined;
  authorName: string | undefined;
}

const BookInfo = ({ bookName, authorName }: Props) => {
  return (
    <VStack>
      <Heading maxWidth={200} textColor={"gray.300"} fontSize={18}>
        {bookName}
      </Heading>
      <Heading textColor={"gray.500"} fontSize={17}>
        {authorName}
      </Heading>
    </VStack>
  );
};

export default BookInfo;
