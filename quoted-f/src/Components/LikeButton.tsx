import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  if (liked)
    return (
      <IconButton
        height={8}
        width={8}
        marginY={1}
        color={"green.100"}
        fontSize="24px"
        onClick={() => setLiked(false)}
        aria-label="Like"
        icon={<AiFillLike />}
      />
    );
  return (
    <IconButton
      height={8}
      width={8}
      marginY={1}
      bgColor="transparent"
      fontSize="24px"
      onClick={() => setLiked(true)}
      aria-label="Like"
      icon={<AiOutlineLike />}
    />
  );
};

export default LikeButton;
