import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEspiarme]'
})
export class EspiarmeDirective implements OnInit, OnDestroy {
static nextId=0;
log=(msg:string)=>console.log(`Evento #${EspiarmeDirective.nextId++} ${msg}`);
ngOnInit(){this.log(`#######****** onInit`);}
ngOnDestroy(): void{this.log(`######****** onDestroy`);}
  constructor() { }

}
