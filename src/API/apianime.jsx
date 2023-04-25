import axios from "axios";

export const api = axios.create({
  baseURL: "https://animechan.vercel.app/api",
});

export const api2 = axios.create({
  baseURL: "https://animechan.vercel.app/api/random",
});

export const api3 = axios.create({
  baseURL: "https://animechan.vercel.app/api/random",
});
