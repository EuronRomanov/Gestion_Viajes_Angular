import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule as NgRxStoreModule, ActionReducerMap } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent} from "./destino-detalle/destino-detalle.component";
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosViajesState, initializeDestinosViajesState, reducerDestinosViajes } from "./models/destinos-viajes-state.model";


import { DestinoApiClient } from "./models/DestinoApiClient";
import { EffectsModule } from '@ngrx/effects';

const routes: Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:ListaDestinosComponent},
  {path:'destino/:id', component:DestinoDetalleComponent}
];

//redux init
export interface AppState{
  destinos:DestinosViajesState;
}

/*const reducers: ActionReducerMap<AppState>={
  destinos: reducerDestinosViajes
};*/

let reducersInitialState={
  destinos: initializeDestinosViajesState()
};
@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoViajeComponent,
    FormDestinoViajeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    //NgRxStoreModule.forRoot(reducers,{initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinosViajesState]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
