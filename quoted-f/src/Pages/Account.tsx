import { VStack,Center, Divider, Text, Image,Heading} from "@chakra-ui/react"
import { useUserContext } from "../hooks/UserProvider";
import { useEffect, useState } from "react";
import { Quote } from "../hooks/quoteProvider";
import APIClient from "../services/api-client";


function Account() {
    const { username, liked_quotes } = useUserContext();
    const [quotes, setQuotes] = useState<any[]>([]);
    const apiClient = new APIClient<Quote>('/quote/');

    useEffect(() => {
        fetchQuotes()
    }, [liked_quotes]);
  
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
        <div>
        <Center>            
            <VStack paddingY={25}>
                <Image borderRadius="full" boxSize="150px" src="data:image/jpeg;base64,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" alt="Account"/>
                <Heading size="xl">@{username}</Heading>
                <Divider size="4xl"/>
                <Heading paddingY={5}>Library</Heading>
                {quotes.map((quote) => (
                <Text key={quote.id}>
                    <strong>Quote:</strong> {quote.Quote} <br />
                    <strong>Date Added:</strong> {quote.DateAdded} <br />
                    <strong>Book Name:</strong> {quote.BookName} <br />
                    <strong>Author Name:</strong> {quote.AuthorName} <br />
                    <strong>Likes:</strong> {quote.Likes}
                </Text>
                ))}
            </VStack>
        </Center>

        </div>

    )


}
export default Account