import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ProductoLista]
})
export class App {
  protected readonly title = signal('inventario-app');
}
