import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from "../models/destino-viaje.model";
import { DestinoApiClient } from '../models/DestinoApiClient';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates:string[];
   //destinos!: DestinoViaje[];
  constructor(public destinosApiClient:DestinoApiClient) {
    //this.destinos=[];
    this.onItemAdded=new EventEmitter();
    this.updates=[];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje)=>{
      if (d !=null) {
        this.updates.push('Se ha elegio a '+d.n);
      }
    });
   }

  ngOnInit(): void {
  }

  agregado(d:DestinoViaje){
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);

    //return false;
  }

  elegido(e:DestinoViaje){
    this.destinosApiClient.elegir(e);
    /*this.destinos.forEach(function (x) { x.setSelected(false);});

    d.setSelected(true);*/
  }
}
