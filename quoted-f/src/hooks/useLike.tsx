import { useMutation } from "react-query";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/like/");

const useLike = (): {
  likeQuote: (slug: string) => Promise<void>;
} => {
  const likeMutation = useMutation((slug: string) => apiClient.like(slug));

  const likeQuote = async (slug: string): Promise<void> => {
    try {
      await likeMutation.mutateAsync(slug);
    } catch (error) {}
  };

  return {
    likeQuote,
  };
};

export default useLike;
