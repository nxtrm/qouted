import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

interface LikeParams {
  quoteId: string;
  userId: string | null;
}

const apiClient = new APIClient("/like");

const useLike = (): {
  likeQuote: (params: LikeParams) => Promise<void>;
} => {
  const likeQuote = async (params: LikeParams): Promise<void> => {
    try {
      await apiClient.like(params);
    } catch (error) {
      // Handle errors later
    }
  };

  return {
    likeQuote,
  };
};

export default useLike;
