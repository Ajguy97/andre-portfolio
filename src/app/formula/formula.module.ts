import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormulaListComponent} from './formula-list/formula-list.component';
import { FormulaComponent } from './formula.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import { FormulaCardComponent } from './formula-card/formula-card.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ FormulaListComponent, FormulaComponent, FormulaCardComponent ]
})
export class FormulaModule { }
