import { expect } from "chai";
import { AuthService } from "../src/services/auth.service";
import { Fixture } from "../src/utils/Fixture";

describe('ServerRest - Valida o Login de usuario', () => {
    const authService = new AuthService();

    it('CT01 - Deve realizar login com sucesso e retornar status 200', async () => {
        const usuarioValido = Fixture.load('usuarios/usuarioValido');
        const response = await authService.login(usuarioValido);
        expect(response.status).to.equal(200);
        expect(response.data.message).to.equal("Login realizado com sucesso");
        expect(response.data.authorization).to.match(/^Bearer\s/);
    });

    it('CT02 - Nao deve realizar login e retornar status 401', async () => {
        const usuarioInvalido = Fixture.load('usuarios/usuarioInvalido');
        const response = await authService.login(usuarioInvalido);
        expect(response.status).to.equal(401);
        expect(response.data.message).to.equal("Email e/ou senha inválidos");
    });
});