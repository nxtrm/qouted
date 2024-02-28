import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/delete/");

const useDelete = (slug: string) =>
  useQuery({
    queryKey: ["quote", slug],
    queryFn: () => apiClient.delete(slug),
  });
export default useDelete;
