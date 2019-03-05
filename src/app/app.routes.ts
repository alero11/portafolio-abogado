import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './layouts/cms/login/login.component';
import { PrincipalComponent } from './layouts/cms/principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CasosJuridicosComponent } from './components/casos-juridicos/casos-juridicos.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'casos-juridicos', component: CasosJuridicosComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'inicio-sesion', component: LoginComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

