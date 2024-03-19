import APIClient from "../services/api-client";
import { useUserContext } from "./UserProvider";

interface DisLikeParams {
  quoteId: string;
  userId: string | null;
}

const apiClient = new APIClient("/dislike");

type DisLikeResponse = {
  message: string;
  liked_quotes: [] | null;
};

const useDisLike = (): {
  dislikeQuote: (params: DisLikeParams) => Promise<DisLikeResponse>;
} => {

  const dislikeQuote = async (params: DisLikeParams): Promise<DisLikeResponse> => {
    try {
      const response = await apiClient.like(params);

      return response;
    } catch (error) {
      // Handle errors later
      throw error;
    }
  };

  return {
    dislikeQuote,
  };
};

export default useDisLike;
