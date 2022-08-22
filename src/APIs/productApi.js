import { axiosClient } from "./axiosClient";

const productApi = {
  // GetAll
  async getAll() {
    const response = await axiosClient.get("/products");
    return response;
  },
  // Get by id
  async get(id) {
    const url = `/products/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
  // Post
  async add(id, data) {
    const url = `/products/${id}`;
    const response = await axiosClient.post(url, data);
    return response;
  },
  // Delete
  async remove(id) {
    const url = `/products/${id}`;
    const response = await axiosClient.delete(url);
    return response;
  },
};
export default productApi;
