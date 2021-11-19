
import { DestinoViaje } from "./destino-viaje.model";
import { BehaviorSubject, Subject } from "rxjs";

export class DestinoApiClient {
    destinos:DestinoViaje[];
   private  destino!:DestinoViaje;
    current: Subject<DestinoViaje>=new BehaviorSubject<DestinoViaje>(this.destino);
    /**
     *
     */
    constructor() {
        this.destinos=[];
       
    }

    add(d:DestinoViaje){
        this.destinos.push(d);
    }
    getAll():DestinoViaje[]{
        return this.destinos;
    }

    getById(id:string):DestinoViaje{
        return this.destinos.filter(function(d) { return d.id.toString()==id; })[0];
    }

    elegir(d: DestinoViaje){
        this.destinos.forEach(x=>x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }

    subscribeOnChange(fn:any){
        this.current.subscribe(fn );
    }
}
