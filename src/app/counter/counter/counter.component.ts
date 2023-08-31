import { Component } from "@angular/core";


@Component({
    selector:'app-counter',
    templateUrl: './counter.component.html'
 })

export class CounterComponent{
    init:number=10;
    variacion:number=5;
    acumular(valor:number){
      this.init+=valor;
    }
  
}