import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule , MaterialModule ],
  declarations: [ AppComponent, HelloComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
