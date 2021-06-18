import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    //Componentes que contienen este modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Los modulos que quieres que sean visibles
    exports:[
        ListadoComponent
    ],
    //Modulos que proveen funciones a angular => ngfor,ngif,rtc.
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}