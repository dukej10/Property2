import { Component, OnInit } from "@angular/core";
import { PropertyModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.css"],
})
export class ProductHomeComponent implements OnInit {
  constructor(private pdtService: ProductService) {}

  productList: PropertyModel[] = [];

  cList: PropertyModel[] = [];

  condicion: string = null;

  /* Filtro de búsqueda */
  condition(condicion) {
    this.cList = [];
    // if (condicion == "venta") {
    //   for (let prop of this.productList) {
    //     if (prop.category == condicion) {
    //       this.cList.push(prop);
    //     }
    //   }
    // }

    for (let prop of this.productList) {
      if (prop.category.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
        console.log("CATEGORY");
      }
      if (prop.tipo.toUpperCase() == condicion.toUpperCase()) {
        this.cList.push(prop);
      }
    }

    // if (condicion == "casa") {
    //   for (let prop of this.productList) {
    //     if (prop.tipo == condicion) {
    //       this.cList.push(prop);
    //     }
    //   }
    // }

    // if (condicion == "apartamento") {
    //   for (let prop of this.productList) {
    //     if (prop.tipo == condicion) {
    //       this.cList.push(prop);
    //     }
    //   }
    // }

    // if (condicion == "local") {
    //   console.log(condicion);
    //   for (let prop of this.productList) {
    //     if (prop.tipo == condicion) {
    //       this.cList.push(prop);
    //     }
    //   }
    // }
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.pdtService.getAllProducts().subscribe((items) => {
      this.productList = items;
    });
  }
}
