import { useParams } from 'react-router-dom';
import APIClient from '../services/api-client';
import QuoteScreen from '../Components/QuoteScreen';
import { useState } from 'react';

const apiClient = new APIClient("/quote/")

const QuotePage = () => {
  //   const { id } = useParams()
  //   const [quote, setQuote] = useState([])

  //   apiClient.get(id)
  //   .then((response) => {
  //       setQuote(response.)
  //   })
  //   .catch((error) => {})




  // return (
  //   <QuoteScreen quote={''} dateAdded={''} id={response} refetch={function (): void {
  //     } }/>
  // )
}

export default QuotePage