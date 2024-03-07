import { Box, Card, CardBody, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

interface Props {
    id:string
    type:string
    text:string
    alttext:string
    icon:React.ReactNode

}

const QuoteCard = ({type,text,alttext, id, icon}:Props) => {
    //Replace this later


    return(
        <Card size={"sm"} variant="filled">
            <CardBody >
                <HStack paddingX={1.5} spacing={4}>
                        <Box>
                            {icon}
                        </Box>
                        <Text fontSize={type === "book" ? "xl" : "md"} maxWidth={350} noOfLines={[1, 2]}>{text}</Text>
                        <Spacer/>
                        <Heading maxWidth={150} fontSize={"md"} noOfLines={[1, 2]}>{alttext}</Heading>
                </HStack>
            </CardBody>
        </Card> 
    )
}
export default QuoteCard