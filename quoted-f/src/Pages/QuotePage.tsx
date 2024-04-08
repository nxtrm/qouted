import { useParams } from 'react-router-dom';
import APIClient from '../services/api-client';
import QuoteScreen from '../Components/Quote/QuoteScreen';
import { useEffect, useState } from 'react';

const apiClient = new APIClient<Quote>("/quote/")

interface Quote {
  id: string;
  Quote: string;
  DateAdded: string;
  BookName: string;
  AuthorName: string;
  Likes: number;
}

function QuotePage() {
  const { id } = useParams();
  const [quote, setQuote] = useState<Quote|undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.getQuote(id as string);
        if (response) {
          setQuote(response);
        }
      } catch (error) {
        // Handle errors later
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {quote && (
        <QuoteScreen
          quote={quote.Quote}
          dateAdded={quote.DateAdded}
          id={quote.id}
          refetch={function (): void {}}
        />
      )}
    </div>
  );

}

export default QuotePage