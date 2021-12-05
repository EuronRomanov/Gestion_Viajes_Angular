import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppState } from 'src/app/app.module';
import { DestinoApiClient } from "../../../app/models/DestinoApiClient";
import { DestinoViaje } from "../../models/destino-viaje.model";
import {  Store} from "@ngrx/store";
import { DestinosViajesActionTypes } from '../../models/destinos-viajes-state.model';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
/*
class DestinoApiClientViejo{
  getById(id:string):DestinoViaje{
    let flat!:DestinoViaje;
    console.log('llamado por la clase');
    return flat;
  }
  
}

interface AppConfig{
  apiEndpoint:String;
}
const APP_CONFIG_VALUE:AppConfig={
 apiEndpoint: 'mi_api.com'
};
const APP_CONFIG=new InjectionToken<AppConfig>('app.config');

class DestinoApiClientDecorated extends DestinoApiClient {
  constructor(@Inject(APP_CONFIG) private config: AppConfig,store:Store<AppState>) {
    super(store);
  }
  getBydId(id:string):DestinoViaje{
    console.log('llamando por la clase decorada');
    console.log('config'+ this.config.apiEndpoint);
    return super.getById(id);
  }
}*/

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers:[ DestinoApiClient]
})
export class DestinoDetalleComponent implements OnInit {
  destino!:DestinoViaje;
  style={
    sources:{
      world:{
        type: 'geojson',
        data:'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
      }},
      version:8,
      layers:[{
        'id': 'fill',
        'source':'world',
        'layout':{},
        'paint':{
          'fill-color':'#6F788A'
        }
      }]
  };
  constructor(private route:ActivatedRoute, private destinosApiClient: DestinoApiClient) { }
 
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.destino=this.destinosApiClient.getById(id);
   
  }

}
