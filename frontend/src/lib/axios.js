import axios from "axios";

//in production there is no localhost, so we have to make dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

const api = axios.create({
    baseURL : "http://localhost:5001/api"
})

export default api