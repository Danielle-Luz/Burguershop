import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com/",
  timeout: 6000
});

api.defaults.headers.common["Authorization"] = localStorage.getItem("@token");