import { expect } from "chai";
import { ServicoDeProduto } from "../src/services/produto.service";

describe('ServerRest - Consulta de produtos', () => {
    const service = new ServicoDeProduto();
    const idProdutoValido = "BeeJh5lz3k6kSIzA";

    it('CT01 - Consulta de produto por ID válido', async () => {
        const res = await service.listarProdutoPorId(idProdutoValido);
        expect(res.status).to.equal(200);
        expect(res.data._id).to.equal(idProdutoValido);
    });

    it('CT02 - Consulta de produto por ID invalido', async () => {
        const res = await service.listarProdutoPorId("1x");
        expect(res.status).to.equal(400);
        expect(res.data.id).to.equal("id deve ter exatamente 16 caracteres alfanuméricos");
    });
});