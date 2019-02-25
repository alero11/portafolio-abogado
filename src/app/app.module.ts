import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/general/footer/footer.component';
import { NavbarComponent } from './layouts/general/navbar/navbar.component';
import { LoginComponent } from './layouts/cms/login/login.component';
import { PrincipalComponent } from './layouts/general/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
