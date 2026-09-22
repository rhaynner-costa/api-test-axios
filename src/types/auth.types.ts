export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    authorization: string; // Onde vem o "Bearer eyJhb..."
}