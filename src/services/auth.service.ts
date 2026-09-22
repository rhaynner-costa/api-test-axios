import { api } from "./apiClient"; // Seu axios configurado
import { TokenManager } from "../utils/TokenManager";
import { LoginPayload, LoginResponse } from "../types/auth.types";

export class AuthService {

    /**
     * Realiza o login e armazena o token automaticamente se for sucesso (200)
     */
    async login(payload: LoginPayload) {
        // Post tipado com <LoginResponse>
        const response = await api.post<LoginResponse>('/login', payload);

        // Validação técnica: Se deu 200, guardamos o token
        if (response.status === 200) {
            const token = response.data.authorization;
            TokenManager.setToken(token);
            // console.log("Token armazenado com sucesso.");
        }

        return response;
    }
}