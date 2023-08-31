import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { MainPageComponent } from "./dbz/main-page/main-page.component";

const routes :Routes=[
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'dbz',
        component: MainPageComponent
    },
 
    {
        path: '**',
        component: HomePageComponent
    }
]

@NgModule({ 
    imports:[
        RouterModule.forRoot(routes)
    ],exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}