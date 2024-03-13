import { Heading, Text, VStack } from "@chakra-ui/react";
import "./styles.css";
import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { Quote } from "../hooks/quoteProvider";

const LibraryPage = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const apiClient = new APIClient<Quote>('/quote/');

  //for testing purposes
  let quoteList: string[] = [
    "65df6663f61144567de2ae4d",
  ];

  const fetchQuotes = async () => {
    try {
      const fetchedQuotes = await Promise.all(
        quoteList.map(async (quoteId) => {
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

  // fetchQuotes()

  return (
    <>
      <Heading paddingY={5}>Library</Heading>
      <VStack>
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
    </>
  );
};

export default LibraryPage;
