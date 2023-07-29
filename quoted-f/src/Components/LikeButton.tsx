import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  if (liked)
    return (
      <IconButton
        color={"green.100"}
        fontSize="25px"
        onClick={() => setLiked(false)}
        aria-label="Like"
        icon={<AiFillLike />}
      />
    );
  return (
    <IconButton
      bgColor="transparent"
      fontSize="25px"
      onClick={() => setLiked(true)}
      aria-label="Like"
      icon={<AiOutlineLike />}
    />
  );
};

export default LikeButton;
