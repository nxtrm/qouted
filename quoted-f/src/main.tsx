import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import QuoteProvider from "./hooks/quoteProvider.tsx";
import "./index.css";
import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <QuoteProvider>
          <RouterProvider router={router} />
        </QuoteProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
