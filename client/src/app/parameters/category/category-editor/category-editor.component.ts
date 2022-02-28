import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare const showUpdateMessageModal: any;

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnInit {

  constructor(private catService: CategoryService, private route: ActivatedRoute, private router: Router) { }
  /* ngModel */

    category: CategoryModel = {
    id: null,
    name: null,
    code: null,
    trequest: null
  }; 
 
  ngOnInit(){
    this.searchCategory();
    this.cFormGroup = this.formGroupEditor();
  }

  cFormGroup: FormGroup;

  formGroupEditor(): FormGroup{
    /* los campos que se solicitan */
   return new FormGroup({ 
     name : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
     code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
     trequest: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)])
   });
 }


searchCategory():void{
  let id = this.route.snapshot.params["id"];
  this.catService.getCategoryById(id).subscribe(item => {
    /* this.category = item; */
    this.cFormGroup.setValue({code: item.code, name: item.name, trequest: item.trequest});
    this.category = item;
    }
  )
}

get code(){
  return this.cFormGroup.get('code');
}
get name(){
  return this.cFormGroup.get('name');
}

get trequest(){
  return this.cFormGroup.get('trequest');
}



 updateCategory(){
  if(this.cFormGroup.valid){  /* Si cumple el formato */
    this.category.code = this.cFormGroup.get('code').value;  /* Actualizacion */
    this.category.name = this.cFormGroup.get('name').value;
    this.category.trequest = this.cFormGroup.get('trequest').value;
    this.catService.updateCategory(this.category).subscribe(item => {
    this.router.navigate(["/admin/category/list"]);
    alert("Se actualizó");
   });
  }
}

 
}
  


 /* -----ngModel---- */
  /* searchCategory():void{
    let id = this.route.snapshot.params["id"];
    this.catService.getCategoryById(id).subscribe(item => {
      this.category = item;
    })
  }

  updateCategory(){
    this.catService.updateCategory(this.category).subscribe(item => {
      alert("actualizado");
      this.router.navigate(["/admin/category/list"]);
    });
  } */


