import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './admin/admin/product-list/product-list.component';
import { ProductCreatorComponent } from './admin/admin/product-creator/product-creator.component';
import { ProductEditorComponent } from './admin/admin/product-editor/product-editor.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductListComponent, ProductCreatorComponent, ProductEditorComponent, ProductHomeComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    ProductListComponent,
    ProductCreatorComponent,
    ProductCreatorComponent,
    ProductDetailsComponent,
    ProductHomeComponent
  ]  
})
export class ProductModule { }
