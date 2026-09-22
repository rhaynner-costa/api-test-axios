import { expect } from 'chai'
import { ServicosDeUsuarios } from '../src/services/usuario.service'

describe('ServerRest - Consulta de Usuarios', () => {
    const service = new ServicosDeUsuarios();
    it('CT01 - Lista de usuarios por email', async () => {
        const res = await service.listarUsuarios({ email: 'fulano@qa.com' });
        expect(res.status).to.equal(200);
        expect(res.data.usuarios[0].email).to.equal('fulano@qa.com');
    });
})


