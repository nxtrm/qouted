import { IconButton } from "@chakra-ui/react";
import { BsPlayFill } from "react-icons/bs";

const NextButton = () => {
  return (
    <IconButton
      bgColor={"gray.700"}
      marginX={1}
      fontSize={"25px"}
      aria-label="Next"
      icon={<BsPlayFill />}
    />
  );
};

export default NextButton;
