import { expect } from "chai";
import { ServicoDeProduto } from "../src/services/produto.service";

describe('ServerRest - Consulta de produtos', () => {
    const service = new ServicoDeProduto();
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
});