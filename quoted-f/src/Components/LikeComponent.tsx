import { Badge, Box, SimpleGrid } from "@chakra-ui/react";
import LikeButton from "./LikeButton";
import LikeCount from "./LikeCount";

interface Props {
  likes: number;
}

const LikeComponent = ({ likes }: Props) => {
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
        <LikeCount likes={likes} />
      </SimpleGrid>
    </Badge>
  );
};

export default LikeComponent;
