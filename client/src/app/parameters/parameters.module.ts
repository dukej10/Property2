import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { CategoryEditorComponent } from './category/category-editor/category-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CategoryListComponent, CategoryCreatorComponent, CategoryEditorComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,  /* ngModel*/
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    CategoryCreatorComponent,
    CategoryEditorComponent,
    CategoryListComponent
  ]
})
export class ParametersModule { }
