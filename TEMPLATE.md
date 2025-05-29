# 📋 Como Usar Este Template

Este é um template Angular completo e otimizado para iniciar projetos da forma correta, evitando retrabalho de configuração.

## 🚀 Configuração Rápida

### 1. Clone ou Use o Template

```bash
# Se estiver no GitHub, use como template
# Ou clone diretamente:
git clone <url-do-repositorio> meu-novo-projeto
cd meu-novo-projeto
```

### 2. Atualize as Informações do Projeto

```bash
# Atualize o package.json
# - name: "meu-novo-projeto"
# - version: "0.0.0"

# Atualize o README.md
# - Título do projeto
# - Descrição
# - URLs do repositório
```

### 3. Instale as Dependências

```bash
npm install
```

### 4. Configurações Específicas do Projeto

```bash
# Atualize o angular.json se necessário
# - projectName na linha 5

# Atualize o título no src/app/app.component.ts
# - readonly titulo = 'SeuProjeto';

# Atualize as configurações de ambiente se necessário
# - src/environments/environment.ts
# - src/environments/environment.prod.ts
```

### 5. Teste Se Tudo Está Funcionando

```bash
npm test              # Testes
npm run format        # Formatação
npm run lint          # Linting
npm run build         # Build
npm start             # Desenvolvimento
```

## 📁 Estrutura Já Configurada

- ✅ **Angular 18+** com standalone components
- ✅ **Tailwind CSS** completo com plugins
- ✅ **Jest** configurado (sem Karma/Jasmine)
- ✅ **ESLint** com regras Angular e TypeScript
- ✅ **Prettier** com plugin Tailwind
- ✅ **TypeScript strict** com path mapping
- ✅ **Angular Material** pronto para uso
- ✅ **VS Code** configurado com extensões recomendadas

## 🎯 Próximos Passos

1. **Remover este arquivo** (`TEMPLATE.md`) após configurar
2. **Implementar suas funcionalidades** específicas
3. **Adicionar PWA** se necessário (`ng add @angular/pwa`)
4. **Configurar CI/CD** para seu ambiente
5. **Personalizar o README.md** com informações do seu projeto

## 🔧 Scripts Disponíveis

```bash
npm start            # Servidor de desenvolvimento
npm test             # Testes unitários
npm run build        # Build de produção
npm run format       # Formatação de código
npm run lint         # Verificação de código
npm run lint:fix     # Correção automática de lint
```

## 💡 Dicas

- Use `ng generate` para criar novos componentes, serviços, etc.
- Os path mappings estão configurados (`@core/*`, `@shared/*`, etc.)
- O projeto está configurado para ser PWA-ready
- Todas as configurações seguem boas práticas modernas

---

**Template criado para máxima produtividade e qualidade! 🚀**
