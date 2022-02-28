import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { CategoryEditorComponent } from './category/category-editor/category-editor.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductListComponent } from '../product/admin/admin/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CategoryModel } from 'src/app/models/category.model';
import { UrlInjectionGuard } from '../guards/url-injection.guard';
import { LoginComponent } from '../security/login/login.component';


const routes: Routes = [
{
      path: 'admin/category/creator',
    component: CategoryCreatorComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/category/editor/:id',
    component: CategoryEditorComponent,
    canActivate: [
      UrlInjectionGuard
    ]

  },
  {
    path: 'admin/category/list',
    component: CategoryListComponent,
    canActivate: [
      UrlInjectionGuard
    ]

  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule
  ],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
