import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService } from './banda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BandaService]
})

export class AppComponent implements OnInit{
  titulo = 'Bandas de Salsa';
  bandas : Banda[];
  banda : Banda;
  constructor(private bandaService: BandaService) {}

  getBandas() : void {
    //this.bandas = this.bandaService.getBandas();
    this.bandaService.getBandas().then(bandas => this.bandas = bandas);
  }

  ngOnInit() : void {
    this.getBandas();
  }

  seleccionar(item: Banda): void {
    this.banda = item;
  }
  /*banda : Banda = {
    id : 1,
    nombre: 'Fania All Stars'
  };*/
}
