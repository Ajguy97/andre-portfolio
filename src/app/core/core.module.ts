import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [ HeaderComponent, WelcomeComponent, FooterComponent ],
  exports: [ HeaderComponent, FooterComponent ]
})
export class CoreModule { }
