import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare const createdMessageProd: any;
declare const cMessageProd: any;

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {

  constructor(private pService: ProductService, private route: Router, private uService: UserService) { 
    this.productFormGroup = this.formGroupCreator();
  }

  asesor: string = "";

  productFormGroup: FormGroup;

  formGroupCreator(): FormGroup{
     /* los campos que se solicitan */
    return new FormGroup({ 
      name : new FormControl('', [Validators.required, Validators.minLength(5)]),
      code: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rooms: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      bathrooms: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      area: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
      category: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(13)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(1000000)]),
      image: new FormControl('', [Validators.required, Validators.maxLength(300000)]),
      image1: new FormControl('', [Validators.required, Validators.maxLength(300000)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(300000)]),
      tipo: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      depto: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      contact: new FormControl('', [Validators.required, Validators.maxLength(40)])
    });
  }

    get code(){
      return this.productFormGroup.get('code');
    }
  
    get name(){
      return this.productFormGroup.get('name');
    }
  
    get rooms(){
      return this.productFormGroup.get('rooms');
    }

    get bathrooms(){
      return this.productFormGroup.get('bathrooms');
    }
  
    get area(){
      return this.productFormGroup.get('area');
    }
  
    get category(){
      return this.productFormGroup.get('category');
    }

    get price(){
      return this.productFormGroup.get('price');
    }
  
    get description(){
      return this.productFormGroup.get('description');
    }
  
    get image(){
      return this.productFormGroup.get('image');
    }

    get image1(){
      return this.productFormGroup.get('image1');
    }
  
    get address(){
      return this.productFormGroup.get('address');
    }

    get tipo(){
      return this.productFormGroup.get('tipo');
    }

    get depto(){
      return this.productFormGroup.get('depto');
    }

    get city(){
      return this.productFormGroup.get('city');
    }
    get contact(){
      return this.productFormGroup.get('contact');
    }

    get encargado(){
      return this.asesor;
    }



  ngOnInit(): void {
    let asesorinfo = this.uService.getUserInformation();
    this.asesor = asesorinfo.realm;
  }

  buildCategoryData(): PropertyModel{
    let property: PropertyModel = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      id: null,
      code: this.code.value,
      name: this.name.value,
      available: true,
      rooms: this.rooms.value,
      bathrooms: this.bathrooms.value,
      area: this.area.value,
      category: this.category.value,
      price: this.price.value,
      description: this.description.value,
      image: this.image.value,
      image1: this.image1.value,
      address: this.address.value,
      tipo: this.tipo.value,
      depto: this.depto.value,
      city: this.city.value,
      encargado: this.asesor,
      contact: this.contact.value
    }
    return property;
  }

  saveNewProduct():void{
    console.log(this.asesor);
    if(this.productFormGroup.valid){
      this.pService.saveNewProduct(this.buildCategoryData()).subscribe(item => {
        createdMessageProd("Se creo el producto satisfactoriamente");
      })
    }else{
      cMessageProd("Datos incorrectos");
    }
  }

  /* saveNewProduct(): void{
    this.pService.saveNewProduct(this.product).subscribe(item =>{
      console.log(this.product);
      alert("se guardo product");
      this.route.navigate(["/admin/product/list"]);
    })

  } */



}
