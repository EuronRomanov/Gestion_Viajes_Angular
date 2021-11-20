
import { Injectable } from "@angular/core";
import { DestinoViaje } from "./destino-viaje.model";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { BehaviorSubject, Subject } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../app.module";
import { ElegidoFavoritoAction, NuevoDestinoAction } from "./destinos-viajes-state.model";



@Injectable()
export class DestinoApiClient {
   /* destinos:DestinoViaje[];
   private  destino!:DestinoViaje;
    current: Subject<DestinoViaje>=new BehaviorSubject<DestinoViaje>(this.destino);*/
    /**
     *
     */
    constructor(private store:Store<AppState>) {
        //this.destinos=[];
       
    }

    add(d:DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d) );
       // this.destinos.push(d);
    }
   /* getAll():DestinoViaje[]{
        return this.destinos;
    }

    getById(id:string):DestinoViaje{
        return this.destinos.filter(function(d) { return d.id.toString()==id; })[0];
    }*/

    elegir(d: DestinoViaje){
        this.store.dispatch(new ElegidoFavoritoAction(d));
       /* this.destinos.forEach(x=>x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);*/
    }

   /* subscribeOnChange(fn:any){
        this.current.subscribe(fn );
    }*/
}
