import { MaterialModule } from './core/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/general/footer/footer.component';
import { NavbarComponent } from './layouts/general/navbar/navbar.component';
import { LoginComponent } from './layouts/cms/login/login.component';
import { PrincipalComponent } from './layouts/cms/principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CasosJuridicosComponent } from './components/casos-juridicos/casos-juridicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    InicioComponent,
    CasosJuridicosComponent
  ],
  imports: [
    BrowserModule,
    // Modulo que permite cargar todos los modulos de Angular Material
    MaterialModule,
    // Modulo que permite animations en Angular material
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
