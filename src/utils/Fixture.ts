import fs from 'fs';
import path from 'path';

export class Fixture {
    private static readonly diretorioBase = path.join(process.cwd(), 'fixtures');

    static load<T = any>(nomeArquivo: string): T {
        const caminho = path.join(this.diretorioBase, `${nomeArquivo}.json`);
        const conteudo = fs.readFileSync(caminho, 'utf-8');
        return JSON.parse(conteudo) as T;
    }
}
