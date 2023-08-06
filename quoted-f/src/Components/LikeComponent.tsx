import { Badge, Box, SimpleGrid } from "@chakra-ui/react";
import LikeButton from "./LikeButton";
import LikeCount from "./LikeCount";
import { useQuoteContext } from "../hooks/quoteProvider";

const LikeComponent = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) throw error;

  return (
    <Badge
      bgColor={"gray.700"}
      variant="subtle"
      height={10}
      marginX={1}
      borderRadius={6}
    >
      <SimpleGrid columns={2} spacing={"5px"}>
        <LikeButton quote={quote} />
        <LikeCount likes={quote.Likes} />
      </SimpleGrid>
    </Badge>
  );
};

export default LikeComponent;
