import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  constructor( private fb:FormBuilder) { }
  // miFormulario:FormGroup=new FormGroup({
  //   'nombre':new FormControl('Rtx 4500ti'),
  //   'precio':new FormControl(1500),
  //   'existencia':new FormControl(5),
  // })
  //setValue deve recibir debe recibir todos los valores required

  ngOnInit(): void {
    this.miFormulario.setValue({
      'nombre':'Rtx 4500ti',
      'precio':1500,
      'existencia':5,
    })
  }
  
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    precio:[,[Validators.required,Validators.min(0)]],
    existencia:[,[Validators.required,Validators.min(0)]]
  })

  campoIsValid(campo:string){
    return (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched) 
  }
  guardar(){
    if(this.miFormulario.valid==false){ this.miFormulario.markAllAsTouched();
      // console.log("nelson");
      return;
    }
    this.miFormulario.reset()
  }
}
