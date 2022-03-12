import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ChangeService } from "../../services/change.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ChangeModel } from "../../models/change.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-change-list",
  templateUrl: "./change-list.component.html",
  styleUrls: ["./change-list.component.css"],
})
export class ChangeListComponent implements OnInit {
  constructor(
    private cService: ChangeService,
    private route: Router,
    private spinner: NgxSpinnerService
  ) {}
  codeProperty: string;
  changeList: ChangeModel[] = [];
  condicion: string = null;
  cList: ChangeModel[] = [];

  showConfirmationsButtons: boolean =
    false; /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = "";

  ngOnInit(): void {
    this.getAllChanges();
  }

  getAllChanges(): void {
    this.cService.getAllChanges().subscribe((items) => {
      this.changeList = items;
      console.table(this.changeList);
    });
  }

  /* Elimina la categoria al dar click en confirmación */
  deleteChange(changeId: string): void {
    console.log("ID ", changeId);
    this.cService.deleteChange(changeId).subscribe((item) => {
      window.location.reload();
    });
  }

  getChange(): string {
    return this.codeProperty;
  }

  /* Se usa si se da click en Cancelar para mostrar los botones de confirmar y cancelar */
  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationsButtons = !this.showConfirmationsButtons;
  }

  /* para ngxPagination */
  cp: number = 1;
  total: number = 0;

  /* ---------*/

  /*NgxSpinner*/

  onPageChange(event): void {
    this.spinner.show();

    this.cp = event;

    setTimeout(() => {
      /** spinner ends after 1,5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  condition(condicion) {
    this.cList = [];
    //console.log("LLEGÓ ", condicion);
    for (let prop of this.changeList) {
      if (prop.code.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
        this.codeProperty = prop.code;
        console.log("ID ", prop.id);
      }
      if (prop.name.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.category.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.type.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.manager.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.date.toString().toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      // this.cList.push(prop);
    }
  }
}
