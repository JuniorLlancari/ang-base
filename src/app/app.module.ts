import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  //COMPONENTES DEL SISTEMA (SCOPE)
  declarations: [
    AppComponent
  ],
  //IMPORTAMOS MODULOS DEL SISTEMAS
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule,
    SharedModule,
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
