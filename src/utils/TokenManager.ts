export class TokenManager {
    // Variável estática para guardar o token na memória durante a execução
    private static token: string | null = null;

    static setToken(token: string) {
        this.token = token;
    }

    static getToken() {
        return this.token;
    }
}