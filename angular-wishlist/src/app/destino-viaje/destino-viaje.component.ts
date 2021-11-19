import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import {  StoreModule} from "@ngrx/store";

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
@Input() destino!:DestinoViaje;
@Input() position!:number;
@HostBinding('attr.class') cssClass='col-md-4';
@Output() onClicked!: EventEmitter<DestinoViaje> ;

  constructor() { 
    this.onClicked=new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.onClicked.emit(this.destino);
    return false;
  }
  voteUp(){
    return false;
  }

  voteDown(){
    return false;
  }
}
