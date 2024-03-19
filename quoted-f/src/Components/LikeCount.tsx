import { Badge } from "@chakra-ui/react";

interface Props {
  likes: number;
}

const LikeCount = ({ likes: likes }: Props) => {
  return (
    <Badge
      height={8}
      width={8}
      marginY={1}
      paddingY={"2px"}
      colorScheme={"green"}
      fontSize="17px"
      borderRadius="4px"
    >
      {likes}
    </Badge>
  );
};

export default LikeCount;
