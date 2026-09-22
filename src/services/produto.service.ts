import { api } from './apiClient';
import { ProdutoPayload } from '../types/produto.types';
import type { filtroProdutos } from '../types/parametrosProdutos';

export class ServicoDeProduto {
  async listarProdutos(params: filtroProdutos = {}) {
    return api.get('/produtos', {
      params: params
    });
  }

  async listarProdutoPorId(prodId: string) {
    return api.get(`/produtos/${prodId}`, {
    });
  }

  async cadastrarProduto(payload: ProdutoPayload) {
    // O header 'Authorization' é injetado automaticamente pelo interceptor!
    return api.post('/produtos', payload);
  }

  async deletarProduto(prodId: string) {
    // O Authorization vai automático pelo interceptor
    return api.delete(`/produtos/${prodId}`);
  }
}
