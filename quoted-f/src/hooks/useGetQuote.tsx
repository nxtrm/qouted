import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/getrandomquote");

const useGetQuote = () => {
  const { data, isLoading, error, refetch } = useQuery<Quote>({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
    staleTime: 24 * 1000 * 60 * 60,
  });
  return { data, isLoading, error, refetch };
};

export default useGetQuote;
