import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

declare const deleteMessageModal: any;      /* Mensaje Modal elim */

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private catService: CategoryService, private route: Router, private spinner: NgxSpinnerService) { }


  categoryList: CategoryModel[] = [];
  
  showConfirmationsButtons: boolean = false;   /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = '';        


  /* para ngxPagination */
  cp: number= 1;
  total: number= 0;

  /* ---------*/   

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void{
    this.catService.getAllCategories().subscribe(items => {
      this.categoryList = items;
      this.total = items.length;
    })
  }

  /* Se usa si se da click en Cancelar para mostrar los botones de confirmar y cancelar */
  ChangeConfirmationButtons(id){
    this.idToShowButtons = id;
    this.showConfirmationsButtons = !this.showConfirmationsButtons;
  }

  /* Elimina la categoria al dar click en confirmación */
  deleteCategory(categoryId: string): void{
    this.catService.deleteCategory(categoryId).subscribe(item => {
      /* deleteMessageModal("Ha sido eliminado satisfactoriamente."); */
      this.route.navigate(["/admin/category/list"]);
      location.reload();
    })
  }

  /*NgxSpinner*/
  
  onPageChange(event):void{
    this.spinner.show();

    this.cp = event;
 
    setTimeout(() => {
      /** spinner ends after 1,5 seconds */
      this.spinner.hide();
    }, 1500);
  }

}
