import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../core/welcome/welcome.component';
import {FormulaComponent} from '../formula/formula.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full' , component: WelcomeComponent},
    { path: 'formula-manager', component: FormulaComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
