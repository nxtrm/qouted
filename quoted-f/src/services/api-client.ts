import axios from 'axios';
import { UserDataResponse } from '../hooks/UserProvider';

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

  like = (likeData: any) => {
    return axiosInstance
      .post(this.endpoint, likeData)
      .then((res) => res.data);
  };

  dislike = (likeData: any) => {
    return axiosInstance
      .post(this.endpoint, likeData)
      .then((res) => res.data);
  };
  
  register = (userData: any) => {
    return axiosInstance
      .post(this.endpoint, userData)
      .then((res) => res.data);
  };

  getUser = (token: string): Promise<UserDataResponse> => {
    return axiosInstance
      .get<UserDataResponse>("/userdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw new Error("Error getting user data: " + error.message);
      });
    }

  updateUser = (userData: any) => {
    return axiosInstance
      .post(this.endpoint, userData)
      .then((res) => res.data);
  };

  search = (type: string, query: any) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${type}/${query}`)
      .then((res) => res.data);
  };
}

export default APIClient;
