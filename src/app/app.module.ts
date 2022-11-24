import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ejercicio4Component } from './ejercicio4/ejercicio4.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ejercicio4Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
