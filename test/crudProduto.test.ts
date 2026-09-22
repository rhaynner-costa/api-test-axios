import { expect } from "chai";
import { ServicoDeProduto } from "../src/services/produto.service";
import { AuthService } from "../src/services/auth.service";

const usuario = {
    email: "fulano@qa.com",
    password: "teste"
};

describe('ServerRest - Valida o CRUD de produtos', () => {

    const authService = new AuthService();
    const service = new ServicoDeProduto();

    before(async () => {
        await authService.login(usuario);
    });


    it('CT01 - Cadastrar produto com sucesso', async () => {
        // 1. Massa de Dados (Dinâmica para não dar erro de duplicidade)
        const produto = {
            nome: "Notebook Gamer " + Date.now(), // Gera nome único
            preco: 5000,
            descricao: "Mouse",
            quantidade: 10
        };
        // 2. Ação
        const response = await service.cadastrarProduto(produto);
        // 3. Validação
        expect(response.status).to.equal(201); // 201 Created
        expect(response.data.message).to.equal("Cadastro realizado com sucesso");
        expect(response.data).to.have.property('_id'); // Garante que gerou um ID
        console.log("Produto cadastrado com ID:", response.data._id);
    });


});