import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  constructor() { }

  init:Personaje={
    nombre:'',
    poder:0
  }

  ngOnInit(): void {
  }
  // @Input() personajes:Personaje[]=[];
  // this.personajes.push(this.nuevo);
  @Input() nuevo:Personaje=this.init;

  @Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

  agregar(){
      if(this.nuevo.nombre.trim().length===0){return;}
      this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo={...this.init}
    }
 
 

}
