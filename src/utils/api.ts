import axios from "axios";
export const instance = (url: string)=> axios.create({
  baseURL: url,
  timeout: 10000,
});