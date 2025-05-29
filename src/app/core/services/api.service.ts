import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  ativo: boolean;
  dataCriacao: string;
  perfil: 'admin' | 'usuario';
}

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  prioridade: 'alta' | 'media' | 'baixa';
  usuarioId: number;
  dataCriacao: string;
  dataVencimento: string;
}

export interface Configuracao {
  id: number;
  chave: string;
  valor: unknown;
  descricao: string;
}

export interface Categoria {
  id: number;
  nome: string;
  cor: string;
  icone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  // Usuários
  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  obterUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`);
  }

  criarUsuario(usuario: Omit<Usuario, 'id'>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/usuarios`, usuario);
  }

  atualizarUsuario(id: number, usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.baseUrl}/usuarios/${id}`, usuario);
  }

  excluirUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/usuarios/${id}`);
  }

  // Tarefas
  obterTarefas(params?: {
    usuarioId?: number;
    concluida?: boolean;
    prioridade?: string;
  }): Observable<Tarefa[]> {
    let httpParams = new HttpParams();

    if (params?.usuarioId) {
      httpParams = httpParams.set('usuarioId', params.usuarioId.toString());
    }

    if (params?.concluida !== undefined) {
      httpParams = httpParams.set('concluida', params.concluida.toString());
    }

    if (params?.prioridade) {
      httpParams = httpParams.set('prioridade', params.prioridade);
    }

    return this.http.get<Tarefa[]>(`${this.baseUrl}/tarefas`, {
      params: httpParams,
    });
  }

  obterTarefaPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/tarefas/${id}`);
  }

  criarTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}/tarefas`, tarefa);
  }

  atualizarTarefa(id: number, tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.patch<Tarefa>(`${this.baseUrl}/tarefas/${id}`, tarefa);
  }

  excluirTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tarefas/${id}`);
  }

  // Configurações
  obterConfiguracoes(): Observable<Configuracao[]> {
    return this.http.get<Configuracao[]>(`${this.baseUrl}/configuracoes`);
  }

  atualizarConfiguracao(
    id: number,
    configuracao: Partial<Configuracao>
  ): Observable<Configuracao> {
    return this.http.patch<Configuracao>(
      `${this.baseUrl}/configuracoes/${id}`,
      configuracao
    );
  }

  // Categorias
  obterCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }

  criarCategoria(categoria: Omit<Categoria, 'id'>): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseUrl}/categorias`, categoria);
  }
}
