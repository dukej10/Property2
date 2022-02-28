import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlInjectionGuard } from '../guards/url-injection.guard';
import { EditorComponent } from './editor/editor.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'solicitud/editor/:id',
    component: EditorComponent,
    canActivate: [
      UrlInjectionGuard
    ]

  },
  {
    path: 'solicitud/list',
    component: ListComponent,
    canActivate: [
      UrlInjectionGuard
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
