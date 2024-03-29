import {
  Spinner
} from "@chakra-ui/react";
import ErrorComponent from "./Errors/ErrorComponent";
import QuoteScreen from "../Components/Quote/QuoteScreen";
import { useQuoteContext } from "../Providers/quoteProvider";
import "./styles.css";

function HomePage() {
  const { quote, isLoading, error, refetch } = useQuoteContext();

  if (isLoading) return <Spinner />;
  if (error || !quote) return <ErrorComponent error={error} />;

  return (
    <QuoteScreen id={quote.id} dateAdded={quote.DateAdded} refetch={refetch} quote={quote.Quote}/>
  );
}

export default HomePage;
