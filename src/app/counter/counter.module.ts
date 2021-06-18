import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';


@NgModule({

    //Componentes que contienen este modulo
    declarations:[
        CounterComponent
     ],
    //Los modulos que quieres que sean visibles
    exports:[
        CounterComponent
     ],
    //Modulos que proveen funciones a angular => ngfor,ngif,rtc.
    imports:[
        CommonModule
    ]
})

export class CounterModule{

}