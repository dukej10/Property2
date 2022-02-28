import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitModel } from 'src/app/models/solicitd.model';


declare const updateMessageSol : any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private sP: SolicitudService, private router: Router, private route: ActivatedRoute) { }


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

  ngOnInit(){
    this.searchSolicitud();
  }


  searchSolicitud():void{
    let id = this.route.snapshot.params["id"];
    this.sP.getSolcitudById(id).subscribe(item => {
      this.solicitud = item;
    })
  }

  updateSolicitud(){
    this.sP.updateSolcitud(this.solicitud).subscribe(item => {
      updateMessageSol("Se actualizó satisfactoriamente");
      /* alert("Se actualizó") */
      /* this.router.navigate(["/solicitud/list"]); */
    });
  }
 
}

