import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ChangeService } from "../../services/change.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ChangeModel } from "../../models/change.model";

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
    });
  }

  /* Elimina la categoria al dar click en confirmación */
  deleteChange(changeId: string): void {
    this.cService.deleteChange(changeId).subscribe((item) => {
      window.location.reload();
    });
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

    for (let prop of this.changeList) {
      console.log("ELEMENTO");
      this.cList.push(prop);
    }
  }
}
