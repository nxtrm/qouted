import { UseQueryResult, useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/like");

const useLike = (slug: string): UseQueryResult<Quote> => {
  return useQuery<Quote>({
    queryKey: ["like", slug],
    queryFn: () => apiClient.like(slug),
    staleTime: 5 * 1000 * 60, // 5 min
  });
};

export default useLike;
