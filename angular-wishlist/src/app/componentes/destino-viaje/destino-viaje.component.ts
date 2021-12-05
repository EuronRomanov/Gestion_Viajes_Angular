import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import {  Store} from "@ngrx/store";
import { AppState } from "../../app.module";
import { VoteUpAction} from "../../models/destinos-viajes-state.model";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css'],
  animations:[
    trigger('esFavorito',[
      state('estadoFavorito',style({
        backgroundColor:'PaleTurquoise'
      })),
      state('estadoNoFavorito',style({
        backgroundColor:'WhiteSmoke'
      })),
      transition('estadoNoFavorito=>estadoFavorito',[
        animate('3s')
      ]),
      transition('estadoFavorito=>estadoNOfavorito',[
        animate('1s')
      ])
    ])
  ]
})
export class DestinoViajeComponent implements OnInit {
@Input() destino!:DestinoViaje;
@Input() position!:number;
@HostBinding('attr.class') cssClass='col-md-4';
@Output() onClicked!: EventEmitter<DestinoViaje> ;

  constructor(private store:Store<AppState>) { 
    this.onClicked=new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.onClicked.emit(this.destino);
    return false;
  }
  voteUp(){
    this.store.dispatch(new VoteUpAction(this.destino));
    return false;
  }

  voteDown(){
    this.store.dispatch(new VoteUpAction(this.destino));
    return false;
  }
}
