import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.currencyfreaks.com/v2.0`,
  timeout: 1000,
});

export default instance;
