import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HomeComponent, DireccionesComponent, MisionComponent, VisionComponent, ContactoComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent, DireccionesComponent, ContactoComponent, PageNotFoundComponent
  ]
})
export class GeneralModule { }
