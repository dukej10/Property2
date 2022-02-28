import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginGuard } from '../guards/form-login.guard';
import { UrlInjectionGuard } from '../guards/url-injection.guard';


const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent,
    canActivate:[
      FormLoginGuard   /* Cuando el usuario no está identificado */
    ]
  },
  {
    path: 'user/logout',
    component: LogoutComponent,
    canActivate: [
      UrlInjectionGuard   /* Evita visitar cuando el usuario no este logueado identificado */
    ]
  },
  {
    path: 'user/register',
    component: RegisterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo : '/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
