import { Badge, HStack, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuoteContext } from "../../Providers/quoteProvider";
import useDislike from "../../hooks/useDislike";
import useLike from "../../hooks/useLike";
import ErrorComponent from "../../Pages/Errors/ErrorComponent";
import LikeButton from "./LikeButton";
import LikeCount from "./LikeCount";
import { useUserContext } from "../../Providers/UserProvider";

const LikeComponent = () => {
  const { quote, error } = useQuoteContext();
  if (error || !quote) return <ErrorComponent error={error} />;

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(quote.Likes);

  const { likeQuote } = useLike();
  const { dislikeQuote } = useDislike();

  const { userId, update} = useUserContext()


  const handleLikeClick = async () => {
    if (!quote) return;

    const quoteData = {
        "quoteId": quote.id,
        "userId": userId
    };
    
    try { 
        let response;
        if (!liked) {
            response = await likeQuote(quoteData);
        } else {
            response = await dislikeQuote(quoteData);
        }

        if (response.liked_quotes) {
            update(null, null, response.liked_quotes);
        }

        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    } catch (error) {
        console.error("Error:", error);
    }
};

useEffect(() => {
    if (quote) {
        setLiked(false);
        setLikesCount(quote.Likes);
    }
}, [quote]);

  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Badge
      bgColor={bg}
      variant="subtle"
      height={10}
      marginX={1}
      borderRadius={6}
    >
      <HStack>
        <LikeButton liked={liked} handleClick={handleLikeClick}/>
        <LikeCount likes={likesCount} />
      </HStack>
    </Badge>
  );
};

export default LikeComponent;
