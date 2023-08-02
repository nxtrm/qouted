import { IconButton } from "@chakra-ui/react";
import { BsPlayFill } from "react-icons/bs";

const NextButton = () => {
  return (
    <IconButton
      marginX={2}
      fontSize={"25px"}
      aria-label="Next"
      icon={<BsPlayFill />}
    />
  );
};

export default NextButton;
