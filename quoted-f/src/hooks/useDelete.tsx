import { Quote } from "../Providers/quoteProvider";
import APIClient from "../services/api-client";


const useDelete = () => {


  const apiClient = new APIClient<Quote>("/delete/");

  const handleDeletion = async (slug: string) => {
    // setIsDeleting(true);
    try {
      await apiClient.get(slug);
      console.log("deleted " + slug);

    } catch (error) {
      console.error("Error deleting quote:", error);
    } finally {
      // setIsDeleting(false);
    }
  };

  return {
    handleDeletion,
  };
};

export default useDelete;
