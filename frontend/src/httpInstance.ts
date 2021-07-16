import axios from "axios"

export const instance = axios.create({
    baseURL: import.meta.env.PROD  ? '/api/' : 'http://127.0.0.1:5000/api/',
});