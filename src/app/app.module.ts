import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FormulaModule } from './formula/formula.module';

@NgModule({
  imports:
    [ BrowserModule,
      FormsModule,
      AppRoutingModule ,
      MaterialModule,
      CoreModule ,
      FormulaModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
