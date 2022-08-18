import axios from "axios";

// URL for get data API
export const url = "http://localhost:3002/data";
export const httpRequest = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
