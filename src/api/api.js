import axios from "axios";

//TODO Change to host
const api = axios.create({
  baseURL: "http://localhost:4567/"
});

export default api;