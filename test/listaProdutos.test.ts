import { expect } from "chai";
import { ServicoDeProduto } from "../src/services/produto.service";
import { Logger } from "../src/utils/Logger";
import { SchemaValidator } from "../src/utils/SchemaValidator";
import { Fixture } from "../src/utils/Fixture";
import produtosSchema from "../fixtures/schemas/produtosSchema.json";

describe('ServerRest - Consulta de produtos', () => {
    const service = new ServicoDeProduto();
    const { _id, nome, preco, descricao, quantidade } = Fixture.load('produtos/produtoValido');
    const idProdutoValido = "BeeJh5lz3k6kSIzA";

    it('CT01 - Consulta de produto por ID válido', async () => {
        const response = await service.listarProdutoPorId(idProdutoValido);
        expect(response.status).to.equal(200);
        expect(response.data._id).to.equal(idProdutoValido);
    });

    it('CT02 - Consulta de produto por ID invalido', async () => {
        const response = await service.listarProdutoPorId("1x");
        expect(response.status).to.equal(400);
        expect(response.data.id).to.equal("id deve ter exatamente 16 caracteres alfanuméricos");
    });

    it('CT03 - Lista de produtos por nome', async () => {
        const response = await service.listarProdutos({ nome });
        //Logger.printResponse(response);
        expect(response.status).to.equal(200);
        expect(response.data.produtos[0].nome).to.equal(nome);
    });

    it('CT04 - Lista de produtos por preco', async () => {
        const response = await service.listarProdutos({ preco });
        expect(response.status).to.equal(200);
        response.data.produtos.forEach((produto: any) => {
            expect(produto.preco).to.equal(preco);
        });
    });

    it('CT05 - Lista de produtos por descricao (busca parcial)', async () => {
        // A API filtra "descricao" por busca parcial (contains), nao por igualdade exata
        const response = await service.listarProdutos({ descricao });
        expect(response.status).to.equal(200);
        response.data.produtos.forEach((produto: any) => {
            expect(produto.descricao.toLowerCase()).to.include(descricao.toLowerCase());
        });
    });

    it('CT06 - Lista de produtos por quantidade', async () => {
        const response = await service.listarProdutos({ quantidade });
        expect(response.status).to.equal(200);
        response.data.produtos.forEach((produto: any) => {
            expect(produto.quantidade).to.equal(quantidade);
        });
    });

    it('CT07 - Lista de produtos por _id', async () => {
        const response = await service.listarProdutos({ _id });
        expect(response.status).to.equal(200);
        expect(response.data.produtos[0]._id).to.equal(_id);
    });

    it('CT08 - Lista de produtos com filtro sem resultado', async () => {
        const response = await service.listarProdutos({ nome: 'ProdutoInexistenteXYZ' });
        expect(response.status).to.equal(200);
        expect(response.data.quantidade).to.equal(0);
        expect(response.data.produtos).to.have.lengthOf(0);
    });

    it('CT09 - Validar o json schema do contrato', async () => {
        const response = await service.listarProdutos();
        expect(response.status).to.equal(200);
        SchemaValidator.validate(response.data, produtosSchema);
    });
});