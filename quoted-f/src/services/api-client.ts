import axios, { AxiosRequestConfig } from 'axios';

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
  // params: {
  //   key: '',
  // },
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // getAll = (config: AxiosRequestConfig) => {
  //   return axiosInstance
  //     .get<FetchResponse<T>>(this.endpoint, config)
  //     .then((res) => res.data);
  // };

  getRandomQuote = () => {
    // console.log(this.endpoint)
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;