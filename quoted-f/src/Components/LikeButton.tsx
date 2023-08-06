import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Quote } from "../hooks/quoteProvider";
import useLike from "../hooks/useLike";

interface Props {
  quote: Quote;
}

const LikeButton = ({ quote }: Props) => {
  const [liked, setLiked] = useState(false);
  const { refetch } = useLike(quote.id!);

  const handleLikeClick = async () => {
    setLiked(!liked);
    await refetch();
    console.log(quote.Likes);
  };

  return (
    <IconButton
      height={8}
      width={8}
      marginY={1}
      color={liked ? "green.100" : undefined}
      fontSize="24px"
      onClick={handleLikeClick}
      aria-label="Like"
      icon={liked ? <AiFillLike /> : <AiOutlineLike />}
    />
  );
};

export default LikeButton;
