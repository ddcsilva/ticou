import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiService, Usuario } from '@core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly titulo = 'Ticou';
  private readonly apiService = inject(ApiService);

  usuarios: Usuario[] = [];
  carregando = false;
  erro = '';

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  private carregarUsuarios(): void {
    this.carregando = true;
    this.erro = '';

    this.apiService.obterUsuarios().subscribe({
      next: usuarios => {
        this.usuarios = usuarios;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar usuários. Certifique-se de que a API está rodando (npm run api)';
        this.carregando = false;
      }
    });
  }
}
