import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {


  lenguajes:string[]=['PHP','JS','C#','PYTHON'];
  eliminado:string="";
  borrarHeroe(){
    this.eliminado=this.lenguajes.shift()||'';
    
  }
  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
