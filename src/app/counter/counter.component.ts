import { Component } from "@angular/core";


@Component({
    selector:'app-counter',
    templateUrl: './counter.component.html'
 })

export class CounterComponent{
    init:number=10;
    base:number=5;
    sumar(){
      this.init+=1;
    }
    restar(){
      this.init-=1;
    }
    acumular(valor:number){
      this.init+=valor;
    }
  
}