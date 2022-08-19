import axios from "axios";

// URL for get data API
export const url = "http://localhost:3002";
export const dataStorage = ["productList", "cartList"];

// Fetch API
export const httpRequest = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
