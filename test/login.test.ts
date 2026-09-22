import { expect } from "chai";
import { AuthService } from "../src/services/auth.service";

describe('ServerRest - Valida o Login de usuario', () => {
    const authService = new AuthService();

    it('CT01 - Deve realizar login com sucesso e retornar status 200', async () => {
        const usuarioValido = {
            email: "fulano@qa.com",
            password: "teste"
        };
        const res = await authService.login(usuarioValido);
        expect(res.status).to.equal(200);
        expect(res.data.message).to.equal("Login realizado com sucesso");
        expect(res.data.authorization).to.match(/^Bearer\s/);
    });

    it('CT02 - Nao deve realizar login e retornar status 401', async () => {
        const usuarioInvalido = {
            email: "fulano@qa.com",
            password: "teste9999"
        };
        const res = await authService.login(usuarioInvalido);
        expect(res.status).to.equal(401);
        expect(res.data.message).to.equal("Email e/ou senha inválidos");
    });
});