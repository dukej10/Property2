import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './general/home/home.component';
import { DireccionesComponent } from './general/direcciones/direcciones.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ContactoComponent } from './general/contacto/contacto.component';
import { ParametersModule } from './parameters/parameters.module';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { SolicitudModule } from './solicitud/solicitud.module';


const routes: Routes = [
  /* Home */
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  /* Misión y Visión */
  {
    path: 'direc',
  component: DireccionesComponent
  },
  {
    path: 'dir',
  component: DireccionesComponent
  },

  /* Direccionamiento Seguridad */
  {
    path: 'security',
    loadChildren: './security/security.module#SecurityModule' 
  }, 

  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'contact',
    component: ContactoComponent
  },

  {
    path: '**',
  component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  GeneralModule,
  ClientModule,
  ClientRoutingModule,
  ParametersModule,
  ProductRoutingModule,
  FormsModule,
  SolicitudModule,
  NgxSpinnerModule,
  NgxPaginationModule,
  ReactiveFormsModule
  
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
