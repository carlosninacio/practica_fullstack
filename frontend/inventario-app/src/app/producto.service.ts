import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  
  private urlBase = "http://localhost:8080/inventario-app/productos";

}
