import { Component } from '@angular/core';

export class Banda {
  id : number;
  nombre : string;
}

const BANDAS: Banda[] = [
  { id: 11, nombre: 'Héctor Lavoe'},
  { id: 12, nombre: 'Willie Colón'},
  { id: 13, nombre: 'Ruben Blades'},
  { id: 14, nombre: 'Celia Cruz'},
  { id: 15, nombre: 'Richie Ray'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Bandas de Salsa';
  bandas = BANDAS;

  banda : Banda;

  seleccionar(item: Banda): void {
    this.banda = item;
  }
  /*banda : Banda = {
    id : 1,
    nombre: 'Fania All Stars'
  };*/
}
