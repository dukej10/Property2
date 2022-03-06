import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeListComponent } from "./change-list/change-list.component";
import { ChangeEditorComponent } from "./change-editor/change-editor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [ChangeListComponent, ChangeEditorComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [ChangeListComponent, ChangeEditorComponent],
})
export class ChangeModule {}
