import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

declare const showUpdateMessage : any;

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.css']
})
export class ClientEditorComponent implements OnInit {

  clientListData;
  id = null;

  getUrlParameter = (parameterName: string) => {
    return this.route.snapshot.paramMap.get(parameterName); /* Obtiene el párametro que se envia por url */
  }

  client = {
    id: null,
    doc: null,
    name: null,
    age: null,
    email: null,
    phone: null
  }
  

  constructor(private  route: ActivatedRoute, private clientService: ClientService) { 
  
  }

  ngOnInit(){
    this.loadClientToEdit();
    this.loadClientListInfo();
  }

  loadClientListInfo(){    /* Actualiza la client list*/
    this.clientListData = this.clientService.getClientListData();
  }

  loadClientToEdit(){
    let id = this.getUrlParameter("clientId");
    let clientFound = this.clientService.searchClient(id);
    this.client.doc = clientFound._id;
    this.client.name = clientFound.name;
    this.client.age = clientFound.age;
    this.client.email = clientFound.email;
    this.client.phone = clientFound.phone;
    this.client.id = id;
  }

  updateClient(){
    if (this.client.id != null){  /* si la cumple es que es válido (han buscado algo) */
      let updated = this.clientService.updateClient(this.client);
      if(updated){
        alert("Ha sido actualizado");
      }else{
        alert("no ha sido actualizado");
      }
    }
  }

}
