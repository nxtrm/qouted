import { IconButton } from "@chakra-ui/react";
import { BiTrashAlt } from "react-icons/bi";

const DeleteButton = () => {
  return (
    <IconButton
      fontSize="25px"
      onClick={() => console.log("deleted")}
      aria-label="Edit"
      color={"red.200"}
      bgColor="transparent"
      icon={<BiTrashAlt />}
    />
  );
};

export default DeleteButton;
