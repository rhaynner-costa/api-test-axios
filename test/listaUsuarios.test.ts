import { expect } from 'chai'
import { ServicosDeUsuarios } from '../src/services/usuario.service'
import { Logger } from '../src/utils/Logger'
import { SchemaValidator } from '../src/utils/SchemaValidator'
import { Fixture } from '../src/utils/Fixture'
import usuariosSchema from '../fixtures/schemas/usuariosSchema.json'

describe('ServerRest - Consulta de Usuarios', () => {
    const { _id, nome, email, administrador } = Fixture.load('usuarios/usuarioValido');
    const service = new ServicosDeUsuarios();

    it('CT01 - Lista de usuarios por email', async () => {
        const response = await service.listarUsuarios({ email });
        //Logger.printResponse(response);
        expect(response.status).to.equal(200);
        expect(response.data.usuarios[0].email).to.equal(email);
    });

    it('CT02 - Lista de usuarios por nome', async () => {
        const response = await service.listarUsuarios({ nome });
        expect(response.status).to.equal(200);
        expect(response.data.usuarios[0].nome).to.equal(nome);
    });

    it('CT03 - Lista de usuarios por administrador', async () => {
        const response = await service.listarUsuarios({ administrador });
        expect(response.status).to.equal(200);
        response.data.usuarios.forEach((usuario: any) => {
            expect(usuario.administrador).to.equal(administrador);
        });
    });

    it('CT04 - Lista de usuarios por _id', async () => {
        const response = await service.listarUsuarios({ _id });
        expect(response.status).to.equal(200);
        expect(response.data.usuarios[0]._id).to.equal(_id);
    });

    it('CT05 - Lista de usuarios com filtro sem resultado', async () => {
        const response = await service.listarUsuarios({ email: 'naoexiste@qa.com' });
        expect(response.status).to.equal(200);
        expect(response.data.quantidade).to.equal(0);
        expect(response.data.usuarios).to.have.lengthOf(0);
    });

    it('CT06 - Validar o json schema do contrato', async () => {
        const response = await service.listarUsuarios();
        expect(response.status).to.equal(200);
        SchemaValidator.validate(response.data, usuariosSchema);
    });
})


