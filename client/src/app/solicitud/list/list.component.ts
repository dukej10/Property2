import { Component, OnInit } from '@angular/core';
import { SolicitModel } from 'src/app/models/solicitd.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

declare const showInfoSol : any;
declare const ShowFoto : any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sP: SolicitudService, private spinner: NgxSpinnerService) { }


  productList: SolicitModel[] = [];
  condicion: string = null;
  cList: SolicitModel[] = []
  solicitud: SolicitModel = {
    id: null,

    nombre: null,
    direccion: null,
    tipo: null,
    valor: null,
    fecha: null,
    estado: null,
    foto: null,
    asesor: null
  }

  showConfirmationsButtons: boolean = false;   /*  va a decir si mostrar opciones de confirmar o cancelar si se clickea Eliminar */

  idToShowButtons: string = '';        

  ngOnInit(): void {
    this.getAllSolicitud();
  }

  getAllSolicitud(): void{
    this.sP.getAllSolcitud().subscribe(items => {
      this.productList = items;
    })
  }

  /* Se usa si se da click en Cancelar para mostrar los botones de confirmar y cancelar */
  ChangeConfirmationButtons(id){
    this.idToShowButtons = id;
    this.showConfirmationsButtons = !this.showConfirmationsButtons;
  }
  /* para ngxPagination */
  cp: number= 1;
  total: number= 0;

  /* ---------*/  

  /* Elimina la categoria al dar click en confirmación */
  deleteSolicitud(ProductId: string): void{
    this.sP.deleteSolcitud(ProductId).subscribe(item => {
      /* deleteMessageModalP("Ha sido eliminado satisfactoriamente."); */
      /* this.route.navigate(["/admin/product/list"]); */
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
    }, 1000);
    }


    /* Filtro de búsqueda */

  condition(condicion){
    this.cList = [];
    if(condicion == "enviado"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }

    if(condicion == "en estudio"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }

    if(condicion == "aceptado"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }

    if(condicion == "rechazado"){
      for(let prop of this.productList){
        if(prop.estado == condicion){
          this.cList.push(prop);
        }
      }
    }

    if(condicion == "Duque"){
      for(let prop of this.productList){
        if(prop.asesor == condicion){
          this.cList.push(prop);
        }
      }
    }

      if(condicion == "Pepito"){
        for(let prop of this.productList){
          if(prop.asesor == condicion){
            this.cList.push(prop);
          }
        }
    
  }
}


  ShowInfo(id){
      this.sP.getSolcitudById(id).subscribe(item => {
        this.solicitud = item;
        console.log(this.solicitud);
      showInfoSol("Cliente: " + item.nombre + "<br/>" + "Tipo: " + item.tipo + "<br/>" + "Dirección: " + item.tipo + "<br/>"
      + "Valor: " + item.valor + "<br/>" + "Fecha: " + item.fecha + "<br/>" + "Estado: " + item.estado + "<br/>" + "Asesor: " + item.asesor + "<br/>");
      })
  }
}

  /* ShowFoto(id){
    this.sP.getSolcitudById(id).subscribe(item => {
      this.solicitud = item;
    ShowFoto(this.solicitud.foto);
    })
} */


