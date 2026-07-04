import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1122/api",
});

export default api;