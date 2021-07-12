import axios from 'axios';


export const RequestLocal = axios.create({
    baseURL: `http://localhost:5000`,
  });

export const API = axios.create({
    baseURL: `https://api.spotify.com/v1`,
});