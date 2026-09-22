import axios from "axios";
import 'dotenv/config';
import { TokenManager } from "../utils/TokenManager";

const BASE_URL = process.env.BASE_URL || 'https://serverest.dev';

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json' 
    },
    validateStatus: () => true  
});

// Antes de cada request sair, esse bloco roda:
api.interceptors.request.use((config) => {
    // 1. Busca o token salvo
    const token = TokenManager.getToken();
    
    // 2. Se tiver token E não for login, injeta no header
    if (token && config.url !== '/login') {
        config.headers.Authorization = token;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

