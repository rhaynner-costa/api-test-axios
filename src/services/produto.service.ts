import { api } from './apiClient';
import { ProdutoPayload } from '../types/produto.types';

export class ServicoDeProduto {
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
