import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel esta aqui
import { BandaDetalleComponent } from './banda-detalle.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- importa el FormsModule antes del enlace con [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
