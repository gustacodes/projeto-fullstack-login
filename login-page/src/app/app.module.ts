import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
