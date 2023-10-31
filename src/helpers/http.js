import { useAccount } from "@/hooks/account";
import axios from "axios";

const { code } = useAccount();

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/",
});

http.defaults.headers.common["Authorization"] = `Bearer ${code.value}`;

export default http;
