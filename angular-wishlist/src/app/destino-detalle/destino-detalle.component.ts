import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DestinoApiClient } from "../../app/models/DestinoApiClient";
import { DestinoViaje } from "../models/destino-viaje.model";
import { DestinosViajesActionTypes } from '../models/destinos-viajes-state.model';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css']
})
export class DestinoDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute, private destinosApiClient: DestinoApiClient) { }
  destino!:DestinoViaje;
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
   // this.destino=this.destinosApiClient.getById(id);
   
  }

}
