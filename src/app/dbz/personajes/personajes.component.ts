import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

 
  // @Input('dataServicio') personajes:Personaje[]=[]; --
  get personajes():Personaje[]{
    return this._dbzService.personajes;
  }
  constructor(private _dbzService:DbzService){}
 
}
