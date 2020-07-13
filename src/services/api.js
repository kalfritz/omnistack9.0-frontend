import axios from "axios";

const api = axios.create({
  baseURL: "https://aircnc-0.herokuapp.com/",
});

export default api;
