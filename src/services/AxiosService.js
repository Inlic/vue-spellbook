import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})