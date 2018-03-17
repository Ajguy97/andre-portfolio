import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from '../welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', pathMatch: "full" , component: WelcomeComponent},
];


@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }