import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
 
 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo:Personaje={ nombre:'',  poder: 0   }
 
  constructor(){}
  
}

//  personajes:Personaje[]=[];
// get personajes():Personaje[]{
//   return this._dbzService.personajes;
// }

// agregarPersonaje(argument:Personaje){
//   this.personajes.push(argument);
// }

// constructor(private _dbzService:DbzService){
  // this.personajes=_dbzService.personajes;
// }