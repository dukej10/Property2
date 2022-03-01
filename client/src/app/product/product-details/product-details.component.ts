import { Component, OnInit } from "@angular/core";
import { ProductModule } from "../product.module";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { PropertyModel } from "src/app/models/product.model";
import { SolicitModel } from "src/app/models/solicitd.model";
import { SolicitudService } from "src/app/services/solicitud.service";
import { UserService } from "src/app/services/user.service";
import * as moment from "moment";

declare const SendSol: any;

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  client: string = "";

  constructor(
    private pdtService: ProductService,
    private route: ActivatedRoute,
    private sP: SolicitudService,
    private uService: UserService
  ) {
    let asesorinfo = this.uService.getUserInformation();
    this.client = asesorinfo.realm;
    console.log(this.client);
  }

  product: PropertyModel = {
    id: null,
    code: null,
    name: null,
    available: false,
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

  ngOnInit(): void {
    this.getProductInformation();
  }

  getProductInformation(): void {
    let id = this.route.snapshot.params["id"];
    this.pdtService.getProductById(id).subscribe((item) => {
      let today = new Date();
      let day = `${today.getDate() + 1 < 10 ? "0" : ""}${today.getDate()}`;
      let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${
        today.getMonth() + 1
      }`;
      let year = today.getFullYear();
      let date = `${day}/${month}/${year}`;
      this.product = item;
      this.solicitud.direccion = this.product.address;
      this.solicitud.tipo = this.product.tipo;
      this.solicitud.valor = this.product.price;
      this.solicitud.fecha = date.toString();
      this.solicitud.estado = "enviado";
      this.solicitud.foto = this.product.image;
      this.solicitud.asesor = this.product.encargado;
    });
  }
  /* -----------------------   SOLICITUD ----------------- */
  solicitud: SolicitModel = {
    id: null,
    nombre: null,
    direccion: null,
    tipo: null,
    valor: null,
    fecha: null,
    estado: null,
    foto: null,
    asesor: null,
  };

  saveSolicitud() {
    this.solicitud.nombre = this.client;
    console.log(this.solicitud);
    this.sP.saveNewSolcitud(this.solicitud).subscribe((item) => {
      SendSol("Se envió solicitud exitosamente");
      /* alert("Su solicitud ha sido enviada"); */
    });
  }
}
