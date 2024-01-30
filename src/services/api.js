import axios from 'axios';

//Consumindo a API com axios:
const URL_SERVER = "http://localhost:3001";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;