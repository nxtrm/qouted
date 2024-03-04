import { Card, HStack, CardBody, Text, Heading } from "@chakra-ui/react"
import { FaBookOpen, FaQuoteLeft } from "react-icons/fa";

interface Props {
    type:string
    text:string
    isLiked:boolean
}

const QuoteCard = ({type,text,isLiked}:Props) => {
    return(
        <Card size={"sm"} variant="filled">
            <CardBody>
                <HStack paddingX={1.5} spacing={4}>
                    {type === "book" ? (
                    <>
                    <FaBookOpen size={"1.25rem"} />
                    <Heading noOfLines={1} fontSize={"2xl"}>{text}</Heading>
                    </>
                    ) : (
                    <>
                    <FaQuoteLeft />
                    <Text noOfLines={[1, 2]}>{text}</Text>
                    </>  
                    )}
                </HStack>
            </CardBody>
        </Card> 
    )
}
export default QuoteCard