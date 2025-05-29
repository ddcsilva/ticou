# 📡 JSON Server - API Mock

Este projeto vem configurado com **json-server** para facilitar o desenvolvimento frontend sem depender de um backend.

## 🚀 Como Usar

### Iniciar apenas a API (porta 3000)

```bash
npm run api
```

### Iniciar Angular + API simultaneamente

```bash
npm run dev
```

### Usar rotas customizadas

```bash
npm run api:routes
```

## 📋 Endpoints Disponíveis

### Básicos

- `GET http://localhost:3000/usuarios` - Lista usuários
- `GET http://localhost:3000/tarefas` - Lista tarefas
- `GET http://localhost:3000/configuracoes` - Lista configurações
- `GET http://localhost:3000/categorias` - Lista categorias

### Com Filtros

- `GET http://localhost:3000/tarefas?usuarioId=1` - Tarefas de um usuário
- `GET http://localhost:3000/tarefas?concluida=true` - Tarefas concluídas
- `GET http://localhost:3000/usuarios?ativo=true` - Usuários ativos

### CRUD Completo

```bash
# Criar
POST http://localhost:3000/usuarios
{
  "nome": "Novo Usuario",
  "email": "novo@exemplo.com",
  "telefone": "(11) 99999-9999",
  "ativo": true,
  "dataCriacao": "2024-05-20T10:00:00.000Z",
  "perfil": "usuario"
}

# Atualizar
PATCH http://localhost:3000/usuarios/1
{
  "nome": "Nome Atualizado"
}

# Deletar
DELETE http://localhost:3000/usuarios/1
```

## 🎯 Rotas Customizadas (routes.json)

O arquivo `routes.json` adiciona rotas mais amigáveis:

- `GET http://localhost:3000/api/usuarios/1/tarefas` → Tarefas do usuário 1
- `GET http://localhost:3000/api/tarefas/concluidas` → Todas tarefas concluídas
- `GET http://localhost:3000/api/tarefas/pendentes` → Tarefas pendentes
- `GET http://localhost:3000/api/usuarios/ativos` → Usuários ativos

## 🔧 Serviço Angular Incluído

O projeto já inclui um `ApiService` completo em `src/app/core/services/api.service.ts` com:

- ✅ Métodos tipados para todos os endpoints
- ✅ Interfaces TypeScript para os modelos
- ✅ Tratamento de parâmetros de consulta
- ✅ Métodos CRUD completos

### Exemplo de Uso:

```typescript
import { ApiService } from '@core/services';

export class ExemploComponent {
  constructor(private readonly apiService: ApiService) {}

  carregarUsuarios(): void {
    this.apiService.obterUsuarios().subscribe(usuarios => {
      console.log('Usuários:', usuarios);
    });
  }

  criarTarefa(): void {
    const novaTarefa = {
      titulo: 'Nova Tarefa',
      descricao: 'Descrição da tarefa',
      concluida: false,
      prioridade: 'alta' as const,
      usuarioId: 1,
      dataCriacao: new Date().toISOString(),
      dataVencimento: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
    };

    this.apiService.criarTarefa(novaTarefa).subscribe(tarefa => {
      console.log('Tarefa criada:', tarefa);
    });
  }
}
```

## 📝 Personalizando os Dados

### Editar dados iniciais:

```bash
# Edite o arquivo db.json para alterar dados
code db.json
```

### Resetar dados:

```bash
# Pare o servidor e restaure db.json do git
git checkout db.json
npm run api
```

## 🌐 Acessar Interface Web

O json-server também fornece uma interface web simples:

- **Navegador:** `http://localhost:3000`
- **Visualizar dados:** Interface amigável para explorar os dados

## 💡 Dicas

1. **Headers CORS:** Já configurado automaticamente
2. **Delay simulado:** Adicione `?_delay=2000` para simular latência
3. **Paginação:** Use `?_page=1&_limit=10` para paginar
4. **Ordenação:** Use `?_sort=nome&_order=asc`
5. **Busca:** Use `?q=termo` para busca global

---

**Pronto para desenvolver sem depender de backend! 🚀**
