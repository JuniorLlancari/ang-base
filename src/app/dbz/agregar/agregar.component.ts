import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  constructor(private _dbzService: DbzService) { }

  init:Personaje={ nombre:'',poder:0 }
  @Input() nuevoPersonaje:Personaje=this.init;

  ngOnInit(): void {
  }
  
  
  agregar(){
      if(this.nuevoPersonaje.nombre.trim().length===0){return;}
      this._dbzService.agregarPersonaje(this.nuevoPersonaje)
       this.nuevoPersonaje={...this.init}
      }
  }

    
// @Input() personajes:Personaje[]=[];
// this.personajes.push(this.nuevo);
// @Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

// agregar(){
//     if(this.nuevo.nombre.trim().length===0){return;}
//     this.onNuevoPersonaje.emit(this.nuevo);
//     this.nuevo={...this.init}
//   }