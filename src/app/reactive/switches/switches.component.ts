import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false})


      //Suscribiendo al FORMULARIO
      // this.miFormulario.valueChanges.subscribe(form=>{
      //   this.persona=form;
      // })

      this.miFormulario.valueChanges.subscribe(({condiciones, ...rest})=>{
        this.persona=rest;
      })


      //Suscribiendo al CAMPO DEL FORMULARIO
      // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
      //   console.log(newValue)
      // })  

  }


  miFormulario:FormGroup=this.fb.group({
    genero:['M',Validators.required],
    notificaciones :[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]
  })

  persona={
    genero:'F',
    notificaciones:true
  }
 
  guardar(){
    const formValue={...this.miFormulario.value}
    this.persona=formValue;
    // console.log(formValue)
  }


}
