import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://petbondbd.vercel.app/api/v1",
});

export default apiClient;