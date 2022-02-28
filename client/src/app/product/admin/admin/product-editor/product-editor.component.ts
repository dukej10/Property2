import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModule } from 'src/app/product/product.module';
import { PropertyModel } from 'src/app/models/product.model';


declare const editMessageProd: any;
declare const eMessageProd: any;

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  constructor(private pService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
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
    contact: null
  };

  searchProduct():void{
    let id = this.route.snapshot.params["id"];
    this.pService.getProductById(id).subscribe(item => {
      this.product = item;
    })
  }

  updateProduct(){
    this.pService.updateProduct(this.product).subscribe(item => {
      editMessageProd("Se actualizó la información del inmueble");
    });
  }

}
