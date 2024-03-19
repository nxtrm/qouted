import { Center, Divider, HStack, Heading, SimpleGrid, Text, VStack, useColorModeValue, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ErrorComponent from "../Components/ErrorComponent";
import LikeButton from "../Components/LikeButton";
import LikeCount from "../Components/LikeCount";
import { useUserContext } from "../hooks/UserProvider";
import { Quote } from "../hooks/quoteProvider";
import useDislike from "../hooks/useDislike";
import APIClient from "../services/api-client";


function Account() {
    const { username, userId, liked_quotes, isLoggedIn, update } = useUserContext();
    const { dislikeQuote } = useDislike();

    if (isLoggedIn) {
        
    const [quotes, setQuotes] = useState<any[]>([]);
    const apiClient = new APIClient<Quote>('/quote/');
    const text = useColorModeValue('gray.600', 'gray.300')

    const toast = useToast()

    useEffect(() => {
        fetchQuotes()
    }, [liked_quotes]);

    const handleDislike = async (quoteId: string) => {
        const quoteData ={
            "quoteId": quoteId,
            "userId": userId 
          }

        const response = await dislikeQuote(quoteData);
        if (response.liked_quotes) {
            update(null, response.liked_quotes);
            toast({
                title: "Removed quote from library",
                status: "warning",
                isClosable: true,
              })
        }
    }
  
    const fetchQuotes = async () => {
      if (liked_quotes) {
        try {
  
          const fetchedQuotes = await Promise.all(
            liked_quotes.map(async (quoteId) => {
              try {
                const quote = await apiClient.get(quoteId);
                return quote;
              } catch (error) {
                console.error(`Error fetching quote with ID ${quoteId}:`, error);
                return null;
              }
            })
          );
          setQuotes(fetchedQuotes.filter((quote) => quote !== null));
        } catch (error) {
          console.error("Error fetching quotes:", error);
        }
      };
      }

    return(

        <Center>            
            <VStack paddingY={25}>
                {/* <Image borderRadius="full" boxSize="150px" src="" alt="Account"/> */}
                <Heading size="xl">@{username}</Heading>
                <Divider size="4xl"/>
                {/* <Heading paddingY={5}>Library</Heading> */}

                {quotes.map((quote) => (
                <SimpleGrid paddingLeft={100} columns={2} spacing={10} key={quote.id}>
                    <Text maxWidth={500} fontSize={18} paddingY={10}> {quote.Quote} </Text>
                    <HStack>
                        <VStack padding={5}>
                            <Heading maxWidth={200} textColor={text} fontSize={18}>
                                {quote.BookName}
                            </Heading>
                            <Heading textColor={"gray.500"} fontSize={17}>
                                {quote.AuthorName}
                            </Heading>
                        
                        </VStack>
                        <LikeCount likes={quote.Likes}/>
                        <LikeButton liked={true} handleClick={() => handleDislike(quote.id)}/>
                    </HStack>
                </SimpleGrid>
                ))}
            </VStack>
        </Center>


    )


    }
    else {
        return(
            <ErrorComponent error="You are not logged in"/>
        )
    }

}
export default Account