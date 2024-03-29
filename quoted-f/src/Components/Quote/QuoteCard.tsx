import { Box, Card, CardBody, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import LikeButton from "../Like/LikeButton";
import { useState } from "react";
import useDislike from "../../hooks/useDislike";
import useLike from "../../hooks/useLike";
import { useUserContext } from "../../Providers/UserProvider";

interface Props {
    id:string
    type:string
    text:string
    alttext:string
    icon:React.ReactNode

}

const QuoteCard = ({type,text,alttext, id, icon}:Props) => {
    const { userId, isLoggedIn, update } = useUserContext();
    const [liked, setLiked] = useState(false);

    const { likeQuote } = useLike();
    const { dislikeQuote } = useDislike();

    const handleLikeClick = async () => {
        const quoteData ={
          "quoteId": id,
          "userId": userId 
        }
    
        if (!liked) {
    
          const response = await likeQuote(quoteData);
          if (response.liked_quotes) {
            update(null, null, response.liked_quotes);
          }
          setLiked(true);
        } else {
          const response = await dislikeQuote(quoteData);
          if (response.liked_quotes) {
            update(null, null, response.liked_quotes);
          }
          setLiked(false);
        }
      };

    return(
        <Card size={"sm"} variant="filled">
            <CardBody >
                <HStack paddingX={1.5} spacing={4}>
                        <Box>
                            {icon}
                        </Box>
                        <Text fontSize={type === "book" ? "xl" : "md"} maxWidth={400} noOfLines={[1, 2]}>{text}</Text>
                        <Spacer/>
                        <Heading maxWidth={150} fontSize={"md"} noOfLines={[1, 2]}>{alttext}</Heading>
                        {isLoggedIn && <LikeButton liked={liked} handleClick={handleLikeClick}/>}
                </HStack>
            </CardBody>
        </Card> 
    )
}
export default QuoteCard