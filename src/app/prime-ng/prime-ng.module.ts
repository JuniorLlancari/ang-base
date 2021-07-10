import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
 @NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    TableModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
