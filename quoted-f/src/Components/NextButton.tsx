import { IconButton } from "@chakra-ui/react";
import { BsPlayFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const NextButton = ({ onClick }: Props) => {
  return (
    <IconButton
      bgColor={"gray.700"}
      marginX={1}
      fontSize={"25px"}
      aria-label="Next"
      onClick={onClick}
      icon={<BsPlayFill />}
    />
  );
};

export default NextButton;
