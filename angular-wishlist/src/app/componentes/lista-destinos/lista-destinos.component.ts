import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from "../../models/destino-viaje.model";
import { DestinoApiClient } from '../../models/DestinoApiClient';
import {  Store} from "@ngrx/store";
import { AppState } from "../../app.module";
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../../models/destinos-viajes-state.model';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers:[DestinoApiClient]
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates:string[];
  all!:any;
   //destinos!: DestinoViaje[];
  constructor(public destinosApiClient:DestinoApiClient, private store: Store<AppState>) {
    //this.destinos=[];
    this.onItemAdded=new EventEmitter();
    this.updates=[];
    this.store.select(state=>state.destinos.favorito)
    .subscribe(d=>{
      if (d!=null) {
      this.updates.push('Se ha elegido'+d.n);
    }});
    /*this.destinosApiClient.subscribeOnChange((d: DestinoViaje)=>{
      if (d !=null) {
        this.updates.push('Se ha elegio a '+d.n);
      }
    });*/
store.select(state=>state.destinos.items).subscribe(items=>this.all=items);
   }

  ngOnInit(): void {
  }

  agregado(d:DestinoViaje){
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
   // this.store.dispatch(new NuevoDestinoAction(d));

    //return false;
  }

  elegido(e:DestinoViaje){
    this.destinosApiClient.elegir(e);
    //this.store.dispatch(new ElegidoFavoritoAction(e));
    /*this.destinos.forEach(function (x) { x.setSelected(false);});

    d.setSelected(true);*/
  }

  getAll(){

  }
}
