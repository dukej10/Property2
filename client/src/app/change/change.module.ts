import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeListComponent } from "./change-list/change-list.component";
import { ChangeEditorComponent } from "./change-editor/change-editor.component";

@NgModule({
  declarations: [ChangeListComponent, ChangeEditorComponent],
  imports: [CommonModule],
  exports: [ChangeListComponent, ChangeEditorComponent],
})
export class ChangeModule {}
