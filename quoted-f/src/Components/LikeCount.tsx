import { Badge } from "@chakra-ui/react";

interface Props {
  likes: number;
}

const CriticScore = ({ likes: likes }: Props) => {
  return (
    <Badge
      colorScheme={"green"}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {likes}
    </Badge>
  );
};

export default CriticScore;
