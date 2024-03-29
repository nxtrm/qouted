import APIClient from "../services/api-client";
import { useUserContext } from "../Providers/UserProvider";

interface LikeParams {
  quoteId: string;
  userId: string | null;
}

const apiClient = new APIClient("/like");

type LikeResponse = {
  message: string;
  liked_quotes: [] | null;
};

const useLike = (): {
  likeQuote: (params: LikeParams) => Promise<LikeResponse>;
} => {

  const likeQuote = async (params: LikeParams): Promise<LikeResponse> => {
    try {
      const response = await apiClient.like(params);

      return response;
    } catch (error) {
      // Handle errors later
      throw error;
    }
  };

  return {
    likeQuote,
  };
};

export default useLike;
