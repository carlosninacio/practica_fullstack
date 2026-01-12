import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class App {
  protected readonly title = signal('inventario-app');
}
