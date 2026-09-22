# API Tests - ServeRest

Projeto de **testes automatizados de API** usando **TypeScript**, **Mocha**, **Chai** e **Axios**, focado na API pública do [ServeRest](https://serverest.dev).[file:111]

A ideia é ter um projeto **compacto**, com reaproveitamento básico via *services* e testes simples de leitura.

---

## 🧱 Tecnologias

- **Node.js** (18+)
- **TypeScript**
- **Mocha** – test runner (`describe`, `it`)
- **Chai** – asserções (`expect`)
- **Axios** – cliente HTTP para chamadas às APIs
- **tsx** – para rodar arquivos `.ts` direto no Mocha
- **Mochawesome** – relatório HTML dos testes[file:110][file:111]

---

## 📁 Estrutura do Projeto

```text
api-tests-serverest/
├── src/
│   ├── services/
│   │   ├── apiClient.ts        # Instância Axios com baseURL e configs
│   │   ├── login.service.ts    # Métodos de login na API ServeRest
│   │   └── usuario.service.ts  # Métodos de consulta de usuários
│   └── types/
│       └── parametrosUsuarios.ts  # Interfaces/tipos usados nos serviços (opcional)
│
├── test/
│   ├── login.test.ts           # Cenários de teste de login
│   └── listaDeUsuarios.test.ts # Cenários de teste de listagem de usuários
│
├── .env                        # Variáveis de ambiente (NÃO versionar)
├── tsconfig.json               # Configuração TypeScript (src + test)[1]
├── package.json                # Dependências e scripts npm[2]
└── mochawesome-report/         # Relatórios HTML dos testes (gerado automaticamente)
