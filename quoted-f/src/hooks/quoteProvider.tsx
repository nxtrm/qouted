import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface Quote {
  id: string;
  Quote: string;
  DateAdded: string;
  BookName: string;
  AuthorName: string;
  Likes: number;
}

interface QuoteContextType {
  quote: Quote | undefined;
  isLoading: boolean;
  error: any;
  refetch: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const apiClient = new APIClient<Quote>("/getrandomquote");

interface Props {
  children: ReactNode;
}

const QuoteProvider = ({ children }: Props) => {
  const { data, isLoading, error, refetch } = useQuery<Quote>({
    queryKey: "quote",
    queryFn: () => apiClient.getRandomQuote(),
    staleTime: 24 * 1000 * 60 * 60,
  });

  return (
    <QuoteContext.Provider value={{ quote: data, isLoading, error, refetch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteContext must be used within the QuoteProvider");
  }
  return context;
};

export default QuoteProvider;
