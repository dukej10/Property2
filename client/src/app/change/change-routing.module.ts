import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangeListComponent } from "./change-list/change-list.component";
import { ChangeModule } from "./change.module";
import { UrlInjectionGuard } from "../guards/url-injection.guard";

const routes: Routes = [
  {
    path: "change/list",
    component: ChangeListComponent,
    canActivate: [UrlInjectionGuard],
  },
  {
    path: "change",
    pathMatch: "full",
    redirectTo: "change/list",
    canActivate: [UrlInjectionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ChangeModule],
  exports: [RouterModule],
})
export class ChangeRoutingModule {}
