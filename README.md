# 🏠 Ticou

**Ticou** é um PWA moderno para controle de rotina familiar com checkboxes diários, construído com Angular 18+ e Tailwind CSS.

## 🚀 Tecnologias

- **Angular 18+** com Standalone Components
- **Tailwind CSS** para estilização
- **Jest** para testes unitários
- **Prettier** para formatação de código
- **ESLint** para linting
- **TypeScript** com configuração strict
- **Angular Material** (pronto para uso)
- **JSON Server** para API mock durante desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── core/           # Serviços, interceptadores, guards, helpers
│   ├── shared/         # Componentes reutilizáveis
│   ├── features/       # Funcionalidades por domínio
│   ├── layout/         # Componentes de layout (header, footer, etc.)
│   └── ...
├── environments/       # Configurações de ambiente
└── ...
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia o servidor de desenvolvimento
npm run build            # Build para produção
npm run build:prod       # Build otimizado para produção

# API Mock (JSON Server)
npm run api              # Inicia apenas a API mock na porta 3000
npm run dev              # Inicia Angular + API simultaneamente
npm run api:routes       # API com rotas customizadas

# Testes
npm test                  # Executa testes com Jest
npm run test:watch       # Executa testes em modo watch
npm run test:coverage    # Executa testes com coverage

# Qualidade de Código
npm run lint             # Executa ESLint
npm run lint:fix         # Executa ESLint com correção automática
npm run format           # Formata código com Prettier
npm run format:check     # Verifica formatação sem alterar
```

## 🏗️ Configurações

### TypeScript

- **Strict mode** habilitado
- **Path mapping** configurado (`@core/*`, `@shared/*`, etc.)
- Configuração otimizada para Angular

### Jest

- Substitui Jasmine/Karma
- Configuração para Angular com `jest-preset-angular`
- Coverage reports em HTML, LCOV e texto
- Suporte a path mapping

### Prettier

- Plugin do Tailwind CSS para ordenação de classes
- Configuração consistente para TypeScript, HTML e CSS
- Integração com Angular templates

### ESLint

- Regras do Angular ESLint
- Configuração para Clean Code
- Suporte a TypeScript

## 🎯 Princípios Aplicados

- **Clean Code**: Nomes expressivos, responsabilidades bem definidas
- **SOLID**: Aplicado de forma pragmática
- **Modularidade**: Estrutura clara e organizada
- **Standalone Components**: Aproveitando o Angular moderno
- **TypeScript Strict**: Máxima segurança de tipos

## 🚦 Como Começar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd ticou
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm start
   ```

4. **Execute os testes**
   ```bash
   npm test
   ```

## 📝 Convenções

- **Código em português** (exceto palavras-chave do Angular)
- **Componentes standalone** por padrão
- **Imports organizados** com path mapping
- **Testes em português** para melhor legibilidade
- **Commits semânticos** recomendados

## 🔧 Configuração de Desenvolvimento

### VS Code (Recomendado)

Instale as extensões:

- Angular Language Service
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense

### Configuração do Editor

O projeto inclui configurações para:

- `.editorconfig` - Configurações básicas do editor
- `.prettierrc` - Formatação automática
- `.eslintrc.json` - Regras de linting

## 🎨 Tailwind CSS

O Tailwind está configurado com:

- **Forms plugin** para estilização de formulários
- **Typography plugin** para conteúdo textual
- **Configuração customizada** no `tailwind.config.js`

## 📡 API Mock (JSON Server)

O projeto inclui **JSON Server** configurado para desenvolvimento sem backend:

### Recursos Disponíveis

- 📋 **Dados de exemplo**: Usuários, tarefas, configurações e categorias
- 🔧 **Serviço Angular**: `ApiService` completo e tipado
- 🌐 **Interface web**: `http://localhost:3000` para visualizar dados
- 🎯 **Rotas customizadas**: Endpoints mais amigáveis via `routes.json`

### Como Usar

```bash
# Apenas a API (porta 3000)
npm run api

# Angular + API simultaneamente (recomendado)
npm run dev

# Com rotas customizadas
npm run api:routes
```

### Endpoints Principais

- `GET /usuarios` - Lista usuários
- `GET /tarefas` - Lista tarefas
- `GET /tarefas?usuarioId=1` - Tarefas de um usuário
- `POST /usuarios` - Criar usuário
- `PATCH /usuarios/1` - Atualizar usuário

📖 **Documentação completa**: Veja `JSON_SERVER.md` para detalhes e exemplos

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build:prod
```

### Configurações de Ambiente

- `environment.ts` - Desenvolvimento
- `environment.prod.ts` - Produção

## 🧪 Testes

O projeto usa Jest com configuração otimizada para Angular:

- **Setup automático** do ambiente de testes
- **Coverage reports** detalhados
- **Mocking** facilitado para serviços
- **Testes de componentes** com TestBed

## 📈 Próximos Passos

Este é um setup inicial sólido. Para expandir o projeto:

1. Implementar funcionalidades de rotina familiar
2. Adicionar PWA capabilities
3. Configurar CI/CD
4. Implementar testes E2E
5. Adicionar internacionalização (i18n)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para produtividade familiar**
