import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeListComponent } from "./change-list/change-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [ChangeListComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [ChangeListComponent],
})
export class ChangeModule {}
