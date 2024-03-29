import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlineEdit, AiFillEdit } from "react-icons/ai";

const EditButton = () => {
  const [editing, setEdit] = useState(false);

  if (editing)
    return (
      <IconButton
        fontSize="25px"
        onClick={() => setEdit(false)}
        aria-label="Edit"
        icon={<AiFillEdit />}
      />
    );
  return (
    <IconButton
      bgColor="transparent"
      fontSize="25px"
      onClick={() => setEdit(true)}
      aria-label="Like"
      icon={<AiOutlineEdit />}
    />
  );
};

export default EditButton;
