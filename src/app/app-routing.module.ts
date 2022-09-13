import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {PaletacoloresComponent} from "./components/paletacolores/paletacolores.component";
 import {ServiciosComponent} from "./components/servicios/servicios.component";
const routes: Routes = [
  {path:'paleta',component:PaletacoloresComponent},
   {path:'',component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
