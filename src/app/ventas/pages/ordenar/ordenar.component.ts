import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent  {
  heroes:Heroe[]=[
    {
    nombre:"Superman",
    vuela:true,
    color:Color.azul
    } ,
    {
      nombre:"Batman",
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:"Robin",
      vuela:false,
      color:Color.verde
    } 
  ];

 ordenarPor:string="";
 nombre:string="Junior";
 estadoMayus:boolean=true;
 cambiarEstado(){

  console.log(this.estadoMayus);
  this.estadoMayus =!this.estadoMayus;
 }


 cambiarOrden(valor:string){
  this.ordenarPor=valor;
  console.log(this.ordenarPor)
}

}
