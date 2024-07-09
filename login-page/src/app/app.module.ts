import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
