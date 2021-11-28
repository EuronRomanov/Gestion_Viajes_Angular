import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  ReservasDetalleComponent} from "./reservas-detalle/reservas-detalle.component";
import { ReservasListadoComponent } from "./reservas-listado/reservas-listado.component";

const routes: Routes = [
  {path: 'reservas',component:ReservasListadoComponent},
  {path:'reservas/:id', component:ReservasDetalleComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
