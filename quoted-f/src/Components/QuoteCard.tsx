import { Box, Card, CardBody, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaBookOpen, FaQuoteLeft } from "react-icons/fa";
import useDislike from "../hooks/useDislike";
import useLike from "../hooks/useLike";
import LikeButton from "./LikeButton";

interface Props {
    type:string
    text:string
    alttext:string
    isLiked:boolean
    id:string
}

const QuoteCard = ({type,text,alttext,isLiked, id}:Props) => {
    //Replace this later
    const [liked, setLiked] = useState(false);
    const { likeQuote } = useLike();
    const { dislikeQuote } = useDislike();
    
    if (isLiked) {
        setLiked(true)
    }

    const handleLikeClick = async () => {
        if (!liked) {
          await likeQuote(id);
          setLiked(true);
        } else {
          await dislikeQuote(id);
          setLiked(false);
        }
      };

    return(
        <Card size={"sm"} variant="filled">
            <CardBody >
                <HStack paddingX={1.5} spacing={4}>
                    {type === "book" ? (
                    <>
                    <Box>
                        <FaBookOpen size={"1.25rem"} />
                    </Box>
                    <Heading maxWidth={400} noOfLines={1} fontSize={"2xl"}>{text}</Heading>
                    <Spacer/>
                    <Text maxWidth={400} noOfLines={[1, 2]}>{alttext}</Text>
                    </>
                    ) : (
                    <>
                    <Box>
                        <FaQuoteLeft size={"1.25rem"}/>
                    </Box>
                    <Text maxWidth={400} noOfLines={[1, 2]}>{text}</Text>
                    <Spacer/>
                    <LikeButton liked={liked} handleClick={handleLikeClick}/>
                    </>  
                    )}
                </HStack>
            </CardBody>
        </Card> 
    )
}
export default QuoteCard