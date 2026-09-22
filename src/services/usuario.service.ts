import { api } from './apiClient';
import type { filtroUsuarios } from '../types/parametrosUsuarios'

export class ServicosDeUsuarios {
  async listarUsuarios(params: filtroUsuarios = {}) {
    return api.get('/usuarios', {
      params: params
    });
  }
}
