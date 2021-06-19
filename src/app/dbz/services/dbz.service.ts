import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{


    private _personajes:Personaje[]=[
        {
          nombre:"junior",
          poder:150
        },
        {
          nombre:"jhontan",
          poder:150
        }
    ];
    constructor(){}



    //objetos se envian por referencia
    get personajes():Personaje[]{
      return [...this._personajes]  
    }


    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje)
    }

}






















