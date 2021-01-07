import axios from "axios";

//TODO Change to host
const api = axios.create({
  baseURL: "http://192.168.2.19:4567/"
});

export default api;
