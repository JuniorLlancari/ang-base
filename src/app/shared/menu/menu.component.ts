import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api'; //Este es un items
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  constructor() { }
  model="";
  ngOnInit(): void {
    this.items= [
      {
        label: 'Pipes tutorial',
        icon: 'pi pi-desktop',
 
        items: [
          {
            label: 'Textos y fechas', 
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numeros', 
            icon: 'pi pi-dollar',
            routerLink:'numeros'

          },
          {
            label: 'No comunes', 
            icon: 'pi pi-globe',
            routerLink:'no-comunes'

          }
        ]
      },
      {
        label:'Pipe personalizado',
        icon:'pi pi-cog',
        routerLink:'ordenar'

      }
    ];
  }

}
