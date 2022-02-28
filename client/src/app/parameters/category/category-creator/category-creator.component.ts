import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare const saveMessageModal: any;      /* Mensaje Modal elim */

@Component({
  selector: 'app-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.css']
})
export class CategoryCreatorComponent implements OnInit {

  constructor(private catService: CategoryService, private router: Router) { 
    this.categoryFormGroup = this.formGroupCreator();
  }

  categoryFormGroup: FormGroup;

  formGroupCreator(): FormGroup{
     /* los campos que se solicitan */
    return new FormGroup({ 
      name : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
      trequest: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)])
    });
  }


  get code(){
    return this.categoryFormGroup.get('code');
  }

  get name(){
    return this.categoryFormGroup.get('name');
  }

  get trequest(){
    return this.categoryFormGroup.get('trequest');
  }



  ngOnInit(): void {
  }

  buildCategoryData(): CategoryModel{
    let category: CategoryModel = {
      id: null,
      code: this.code.value,
      name: this.name.value,
      trequest: this.trequest.value,
    }
    return category;
  }

  


  /* Guardar la nueva categoria creada usando formgropu, from control name..*/
  saveNewCategory():void{
    if(this.categoryFormGroup.valid){
      this.catService.saveNewCategory(this.buildCategoryData()).subscribe(item => {
        /* saveMessageModal("oeee"); */
        alert("Se guardó la categoría");
        this.router.navigate(["/admin/category/list"]);
      })
    }else{
      alert("Llene todos los campos correctamente");
    }
    /* Para ngModel */
    /* this.catService.saveNewCategory(this.category).subscribe(item => {
      console.log("oe");
      /* saveMessageModal("Ha sido guardada satisfactoriamente."); 
      alert("oe");
      console.log("oe");
      this.router.navigate(["/admin/category/list"]); 
    });*/


  }


}
