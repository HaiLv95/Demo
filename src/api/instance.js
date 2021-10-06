import  axios from "axios";
export const instance = axios.create({
  baseURL: "https://6156c5bce039a0001725abbf.mockapi.io",
  headers: { "Content-Type": "application/json" }
});
