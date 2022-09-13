import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarratituloComponent } from './components/barratitulo/barratitulo.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { PaletacoloresComponent } from './components/paletacolores/paletacolores.component';

@NgModule({
  declarations: [
    AppComponent,
    BarratituloComponent,
    ServiciosComponent,
    RedesSocialesComponent,
    PaletacoloresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
