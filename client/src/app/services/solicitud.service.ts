import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { SolicitudModule } from '../solicitud/solicitud.module';
import { SolicitModel } from '../models/solicitd.model';
import { Observable } from 'rxjs';


const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient, private uService: UserService) {
    this.token = this.uService.getToken();
   }

   token: string;

   getAllSolcitud():Observable<SolicitModel[]>{
    return this.http.get<SolicitModel[]>(`${base_url}solicitudes?access_token=${this.token}`);

  }

  getSolcitudById(productId: string): Observable<SolicitModel>{
    return this.http.get<SolicitModel>(`${base_url}solicitudes/${productId}?access_token=${this.token}`);
  }

  saveNewSolcitud(product: SolicitModel): Observable<SolicitModel>{
    return this.http.post<SolicitModel>(`${base_url}solicitudes?access_token=${this.token}`, product, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  /* Me actualiza el producto seleccionado */
  updateSolcitud(product: SolicitModel): Observable<SolicitModel>{
    return this.http.put<SolicitModel>(`${base_url}solicitudes?access_token=${this.token}`, product, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  deleteSolcitud(productId: string): Observable<SolicitModel>{
    return this.http.delete<SolicitModel>(`${base_url}solicitudes/${productId}?access_token=${this.token}`)
    };
  }


