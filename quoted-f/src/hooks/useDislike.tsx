import { useMutation } from "react-query";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/dislike/");

const useDislike = (): {
  dislikeQuote: (slug: string) => Promise<void>;
} => {
  const dislikeMutation = useMutation((slug: string) =>
    apiClient.dislike(slug)
  );

  const dislikeQuote = async (slug: string): Promise<void> => {
    try {
      await dislikeMutation.mutateAsync(slug);
    } catch (error) {}
  };

  return {
    dislikeQuote,
  };
};

export default useDislike;
