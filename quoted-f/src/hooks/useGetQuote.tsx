import { useState, useEffect } from "react";
import APIClient from "../services/api-client";
import { Quote } from "./quoteProvider";

const apiClient = new APIClient<Quote>("/quote");

const useGetQuote = (slug: string) => {
  const [data, setData] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(slug);
        setData(response);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError("Error fetching quote");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { data, isLoading, error };
};

export default useGetQuote;
