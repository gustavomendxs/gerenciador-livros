import { Component } from '@angular/core';

import { Livro } from './livros/livro.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciador-livro';
  livro: Livro[] = [];

  onLivroAdicionado(livro) {
    this.livro = [ ...this.livro, livro ]

  }
}
