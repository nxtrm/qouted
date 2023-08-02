import { Badge, Box, SimpleGrid } from "@chakra-ui/react";
import LikeButton from "./LikeButton";
import LikeCount from "./LikeCount";

const LikeComponent = () => {
  return (
    <Badge
      bgColor={"gray.700"}
      variant="subtle"
      height={10}
      marginX={1}
      borderRadius={6}
    >
      <SimpleGrid columns={2} spacing={"5px"}>
        <LikeButton />
        <LikeCount likes={10} />
      </SimpleGrid>
    </Badge>
  );
};

export default LikeComponent;
