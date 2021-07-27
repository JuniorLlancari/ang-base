 import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

 
  constructor(
    private fb:FormBuilder,
    private vs:ValidatorService,
    private emaiValidator:EmailValidatorService) {
      
    } 
  get emailMensageError():string{

    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.required){ return 'Email requerido';}
    else if(errors?.pattern){ return 'El patron no es valido';}
    else if(errors?.emailTomado){ return 'Email ya tomado';}

    return 'ds'
  }
  miFormulario:FormGroup=this.fb.group(
    {
     nombre:['',[Validators.required,Validators.pattern(this.vs.nombreApellidoPattern)]],
     email:['',[Validators.required,Validators.pattern(this.vs.emailPattern)],[this.emaiValidator]],
     username:['',[Validators.required,this.vs.noPuedeSerJuniorLlv]],
     password:['',[Validators.required,Validators.minLength(6)]],
     password2:['',[Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password','password2')]
    }
 )


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Junior Llancari',
      email:'test1@test.com',
      username:'junior99',
      password:'123456',
      password2:'123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

  emailRequired(){
    return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  }
  
  emailFormato(){
    return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  }

 



}
