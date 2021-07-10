import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

 nombreLower:string='junior';
 nombreUpper:string='junior';
 nombreCompleto:string='junior llancari';

 date:Date=new Date();

}
