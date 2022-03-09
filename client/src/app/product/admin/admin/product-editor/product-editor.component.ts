import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute, RouterLink, Router } from "@angular/router";
import { CategoryModel } from "src/app/models/category.model";
import { ProductModule } from "src/app/product/product.module";
import { PropertyModel } from "src/app/models/product.model";
import { ChangeService } from "../../../../services/change.service";
import { UserService } from "../../../../services/user.service";
import { ChangeModel } from "src/app/models/change.model";

declare const editMessageProd: any;
declare const createdMessageProd: any;
declare const SendSol: any;

@Component({
  selector: "app-product-editor",
  templateUrl: "./product-editor.component.html",
  styleUrls: ["./product-editor.component.css"],
})
export class ProductEditorComponent implements OnInit {
  constructor(
    private pService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private chanService: ChangeService,
    private user: UserService
  ) {}

  ngOnInit() {
    this.searchProduct();
  }

  product: PropertyModel = {
    id: null,
    code: null,
    name: null,
    available: null,
    rooms: null,
    bathrooms: null,
    area: null,
    category: null,
    price: null,
    description: null,
    image: null,
    image1: null,
    address: null,
    tipo: null,
    depto: null,
    city: null,
    encargado: null,
    contact: null,
  };

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

  searchProduct(): void {
    let id = this.route.snapshot.params["id"];
    this.pService.getProductById(id).subscribe((item) => {
      this.product = item;
    });
  }

  updateProduct() {
    this.pService.updateProduct(this.product).subscribe((item) => {
      editMessageProd("Se actualizó la información del inmueble");
    });
    this.addChange();
  }

  addChange() {
    //console.log("FUNCIONÓ");
    this.change.code = this.product.code;
    this.change.name = this.product.name;
    this.change.category = this.product.category;
    this.change.image = this.product.image;
    this.change.manager = this.user.getUserInformation().realm;
    this.change.type = "Actualizar";
    let today = new Date();
    let day = `${today.getDate() + 1 < 10 ? "0" : ""}${today.getDate()}`;
    let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${
      today.getMonth() + 1
    }`;
    let year = today.getFullYear();
    let date = `${day}/${month}/${year}`;
    this.change.date = date.toString();
    this.chanService.saveNewChange(this.change).subscribe((item) => {
      console.log(item);
    });
  }
}
