import { useQuery } from "react-query";
import APIClient from "../services/api-client";

interface Quote {
  AuthorName: string;
  BookName: string;
  DateAdded: string;
  Quote: string;
}

const apiClient = new APIClient<Quote>("/getrandomquote");

const useQuote = () =>
  useQuery({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
  });

export default useQuote;
