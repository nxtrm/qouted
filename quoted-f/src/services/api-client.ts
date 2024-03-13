import axios from 'axios';

export interface FetchResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
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

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + id)
      .then((res) => res.data);
  };

  like = (slug: string) => {
    return axiosInstance
      .post<T>(this.endpoint + slug);
  };

  dislike = (slug: string) => {
    return axiosInstance
      .post<T>(this.endpoint + slug);
  };

  register = (userData: any) => {
    return axiosInstance
      .post(this.endpoint, userData)
      .then((res) => res.data);
  };

  login = (userData: any) => {
    return axiosInstance
      .get<T>(this.endpoint, userData)
      .then((res) => res.data);
  };

  search = (type: string, query: any) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${type}/${query}`)
      .then((res) => res.data);
  };
}

export default APIClient;
