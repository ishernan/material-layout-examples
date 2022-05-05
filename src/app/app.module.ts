import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
//import { LoginComponent } from './login/login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     AppComponent,
    // LoginComponent
  ],
  
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    FormGroup,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
