import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Router } from "@angular/router";
import { ProductModule } from "src/app/product/product.module";
import { NgxSpinner } from "ngx-spinner/lib/ngx-spinner.enum";
import { NgxSpinnerService } from "ngx-spinner";
import { PropertyModel } from "src/app/models/product.model";
import { ChangeModel } from "src/app/models/change.model";
import { UserService } from "src/app/services/user.service";
import { ChangeService } from "src/app/services/change.service";

declare const deleteMessageModalP: any; /* Mensaje Modal elim */

declare const createdMessageProd: any;
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor(
    private pService: ProductService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private chanService: ChangeService,
    private user: UserService
  ) {}

  productList: PropertyModel[] = [];
  condicion: string = null;
  cList: PropertyModel[] = [];

  showConfirmationsButtons: boolean =
    false; /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = "";

  ngOnInit(): void {
    this.getAllProducts();
  }

  change: ChangeModel = {
    id: null,
    code: null,
    name: null,
    category: null,
    image: null,
    type: null,
    manager: null,
    date: null,
  };

  getAllProducts(): void {
    this.pService.getAllProducts().subscribe((items) => {
      this.productList = items;
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

  /* Elimina la categoria al dar click en confirmación */
  deleteProduct(ProductId: string): void {
    this.searchProduct(ProductId);
    this.pService.deleteProduct(ProductId).subscribe((item) => {
      alert("Se eliminó");
      window.location.reload();
    });
  }

  searchProduct(productid: string): void {
    this.pService.getProductById(productid).subscribe((item) => {
      console.log("XD");
      this.addChange(item);
    });
  }

  addChange(product: PropertyModel) {
    console.log("FUNCIONÓ");
    this.change.code = product.code;
    this.change.name = product.name;
    this.change.category = product.category;
    this.change.image = product.image;
    this.change.manager = this.user.getUserInformation().realm;
    this.change.type = "Eliminó";
    let today = new Date();
    let day = `${today.getDate() + 1 < 10 ? "0" : ""}${today.getDate()}`;
    let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${
      today.getMonth() + 1
    }`;
    let year = today.getFullYear();
    let date = `${day}/${month}/${year}`;
    this.change.date = date.toString();
    console.log(this.user.getToken());
    this.chanService.saveNewChange(this.change).subscribe((item) => {
      createdMessageProd("Se creo el producto satisfactoriamente");
      console.log(item);
    });
  }

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
    // MANTENIMIENTO CORRECTIVO
    // MANTENIMIENTO PERFECTIVO
    this.cList = [];

    for (let prop of this.productList) {
      if (prop.city.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.depto.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.encargado.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
      if (prop.code.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
    }
    /*
    if (condicion.toUpperCase() == "MEDELLIN") {
      for (let prop of this.productList) {
        if (prop.city == condicion) {
          this.cList.push(prop);
        }
      }
    }

    if (condicion.toUpperCase() == "VILLAMARIA") {
      for (let prop of this.productList) {
        if (prop.city == condicion) {
          this.cList.push(prop);
        }
      }
    }

    if (condicion.toUpperCase() == "CALDAS") {
      for (let prop of this.productList) {
        if (prop.depto == condicion) {
          this.cList.push(prop);
        }
      }
    }

    if (condicion.toUpperCase() == "ANTIOQUIA") {
      for (let prop of this.productList) {
        if (prop.depto == condicion) {
          this.cList.push(prop);
        }
      }
    }

    if (condicion.toUpperCase() == "DUQUE") {
      for (let prop of this.productList) {
        if (prop.encargado == condicion) {
          this.cList.push(prop);
        }
      }
    } else if (condicion.toUpperCase() == "PEPITO") {
      for (let prop of this.productList) {
        if (prop.encargado == condicion) {
          this.cList.push(prop);
        }
      }
    } else if (condicion.toUpperCase() == "DUKECITO") {
      for (let prop of this.productList) {
        if (prop.encargado == condicion) {
          this.cList.push(prop);
        }
      }
    }
    */
  }
}
