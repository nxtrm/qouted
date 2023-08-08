import axios from 'axios';
export interface FetchResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': ' GET'
  }
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }


  getRandomQuote = () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data);
  };

  getQuote =() => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data);
  };

  like = (slug:string) => {
    return axiosInstance
    .post<T>(this.endpoint + slug)
  }

  dislike = (slug:string) => {
    return axiosInstance
    .post<T>(this.endpoint + slug)
  }

}

export default APIClient;