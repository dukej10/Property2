import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UserModel } from 'src/app/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  constructor(private catService: ClientService, private route: Router, private spinner: NgxSpinnerService) { }

  usersList: UserModel[] = [];
  
  showConfirmationsButtons: boolean = false;   /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = '';        


  /* para ngxPagination */
  cp: number= 1;
  total: number= 0;

  /* ---------*/   

  ngOnInit(): void {
  }

 /*  getAllUsers(): void{
    this.catService.getAllUsers().subscribe(items => {
      this.usersList = items;
      this.total = items.length;
    })
  } */

  /* Se usa si se da click en Cancelar para mostrar los botones de confirmar y cancelar */
  ChangeConfirmationButtons(id){
    this.idToShowButtons = id;
    this.showConfirmationsButtons = !this.showConfirmationsButtons;
  }

  /* Elimina la categoria al dar click en confirmación */
 /*  deleteUser(categoryId: string): void{
    this.catService.deleteUser(categoryId).subscribe(item => {
      this.route.navigate(["/client/list"]);
      location.reload();
    })
  } */

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
