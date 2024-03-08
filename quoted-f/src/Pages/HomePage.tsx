import {
  Spinner
} from "@chakra-ui/react";
import ErrorComponent from "../Components/ErrorComponent";
import QuoteScreen from "../Components/QuoteScreen";
import { useQuoteContext } from "../hooks/quoteProvider";
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
