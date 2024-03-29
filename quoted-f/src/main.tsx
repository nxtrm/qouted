import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import QuoteProvider from "./Providers/quoteProvider.tsx";
import router from "./routes";
import { UserProvider } from "./Providers/UserProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <UserProvider>
          <QuoteProvider>
            <RouterProvider router={router} />
          </QuoteProvider>
        </UserProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
