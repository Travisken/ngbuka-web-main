

import axios from "axios";
// import { getTokenWithoutContext } from "./helperServices";
import { getToken } from "./helperServices";

console.log(getToken(), "token");

  const API_URL = process.env.NEXT_PUBLIC_API_ACCESS_BASE_URL;

  const timeoutConfig = {
    timeout: 30000,
  }; // defines a timeout for requests and a message if it takes too long


  export const apiWithOutAuth = axios.create({
    baseURL: API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...timeoutConfig,
  }); // request that doesn't require authentication

  export const apiWithAuth = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`,
        // ...properties,
      },
  
      ...timeoutConfig,

    }); // returns an instance for authenticated API requests

    export const getApiResponse = (data) => {
      return {
        status: true,
        data: data.data,
      };
    }; // create a response structure for successful API responses.
    
    export const getErrorResponse = (error) => {
      return {
        status: false,
        data: error?.response?.data,
      };
    }; // create a response structure for unsuccessful API responses.