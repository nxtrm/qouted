import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface Quote {
  id: string;
  Quote: string;
  DateAdded: string;
  BookName: string;
  AuthorName: string;
  Likes: number;
}

const apiClient = new APIClient<Quote>("/getrandomquote");

const useQuote = () => {
  const { data, isLoading, error, refetch } = useQuery<Quote>({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
    staleTime: 24 * 1000 * 60 * 60,
  });

  return { data, isLoading, error, refetch };
};

export default useQuote;
