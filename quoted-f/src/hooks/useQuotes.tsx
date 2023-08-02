import { useQuery } from "react-query";
import APIClient from "../services/api-client";

interface Quote {
  Quote: string;
  DateAdded: string;
  BookName: string;
  AuthorName: string;
}

const apiClient = new APIClient<Quote>("/getrandomquote");

const useQuote = () =>
  useQuery({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
  });

export default useQuote;
