import axios from "axios";
// Fetch API
export const baseUrl = "http://localhost:3002";

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
