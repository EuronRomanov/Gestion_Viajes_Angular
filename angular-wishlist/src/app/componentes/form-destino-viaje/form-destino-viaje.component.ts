import { Component, OnInit,Output, EventEmitter, Inject, forwardRef } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import {  FormBuilder, FormControlName, FormGroup, Validators,FormControl,ValidationErrors } from "@angular/forms";
import { fromEvent,Observable } from "rxjs";
import { map, filter, debounceTime,distinctUntilChanged, switchMap } from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { APP_CONFIG, AppConfig } from "src/app/app.module";

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
@Output() onItemAdded: EventEmitter<DestinoViaje>;
fg:FormGroup;
minLonguitud=5;
searchResult!:string[];

  constructor(fb: FormBuilder, @Inject(forwardRef(()=>APP_CONFIG)) private config:AppConfig) { 
    this.onItemAdded=new EventEmitter();
    this.fg=fb.group({
      nombre:['', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]],
      url:['']
    });

    this.fg.valueChanges.subscribe((form:any)=>{
      console.log('cambio el formulario',form);
    });
    this.fg.controls['nombre'].valueChanges.subscribe((value:string)=>{
      console.log('nombre cambio:', value);
    });
  }


 


  ngOnInit(): void {
    let elemNombre=<HTMLInputElement>document.getElementById('nombre');
   fromEvent(elemNombre, 'input')
   .pipe(
     map((event) => (event.target as HTMLInputElement).value),
     filter(text=>text.length>2),
     debounceTime(200),
     distinctUntilChanged(),
     switchMap((text:string)=> ajax(this.config.apoEndpoint+'/ciudades?q='+text))
   ).subscribe(AjaxResponse=>this.searchResult=AjaxResponse.response);
  }

  guardar(nombre:string, url:string):boolean{
    const d= new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

  /*nombreValidator(control: FormControl): {[s: string]: boolean } {
    let l =control.value.toString().trim().length ;
    if (l>0 && l<5) {
      return {invalidNombre: true};
    }
    return "null";
  }*/
}
