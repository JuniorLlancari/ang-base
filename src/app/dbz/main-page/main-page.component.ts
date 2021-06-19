import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
 
 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor() { }
  personajes:Personaje[]=[
    {
      nombre:"junior",
      poder:150
    },
    {
      nombre:"jhontan",
      poder:150
    }
  ];
 

  ngOnInit(): void {
  }

 

  nuevo:Personaje={
    nombre:'',
    poder: 0
  }

  agregarPersonaje(argument:Personaje){
    
    this.personajes.push(argument);
 
 }

}
