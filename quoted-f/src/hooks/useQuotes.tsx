import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface Quote {
  AuthorName: string;
  BookName: string;
  DateAdded: string;
  Quote: string;
  Likes: number;
}

const apiClient = new APIClient<Quote>("/getrandomquote");

const useQuote = () =>
  useQuery({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
    staleTime: 24 * 1000 * 60 * 60,
  });

export default useQuote;
