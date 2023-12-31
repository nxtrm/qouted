import { Badge, HStack, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useQuoteContext } from "../hooks/quoteProvider";
import useLike from "../hooks/useLike";
import LikeCount from "./LikeCount";
import useDislike from "../hooks/useDislike";
import ErrorComponent from "./ErrorComponent";

const LikeComponent = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) return <ErrorComponent error={error} />;

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(quote.Likes);

  const { likeQuote } = useLike();
  const { dislikeQuote } = useDislike();

  const handleLikeClick = async () => {
    if (!liked) {
      await likeQuote(quote.id);
      setLiked(true);
      setLikesCount(likesCount + 1);
    } else {
      await dislikeQuote(quote.id);
      setLiked(false);
      setLikesCount(likesCount - 1);
    }
  };
  useEffect(() => {
    if (quote) {
      setLiked(false);
      setLikesCount(quote.Likes);
    }
  }, [quote]);

  return (
    <Badge
      bgColor={"gray.700"}
      variant="subtle"
      height={10}
      marginX={1}
      borderRadius={6}
    >
      <HStack>
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
        <LikeCount likes={likesCount} />
      </HStack>
    </Badge>
  );
};

export default LikeComponent;
