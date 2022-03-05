import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangeListComponent } from "./change-list/change-list.component";
import { ChangeModule } from "./change.module";
import { ChangeEditorComponent } from "./change-editor/change-editor.component";

const routes: Routes = [
  {
    path: "change/list",
    component: ChangeListComponent,
  },
  {
    path: "change",
    pathMatch: "full",
    redirectTo: "change/list",
  },
  {
    path: "change/editor",
    component: ChangeEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ChangeModule],
  exports: [RouterModule],
})
export class ChangeRoutingModule {}
