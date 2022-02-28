import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ClientModel } from '../models/client.model';

const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private uService: UserService, private http: HttpClient) {
    this.token = this.uService.getToken();
    console.log(this.token);
  }
  token: string;

 /*  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${base_url}Users?access_token=${this.token}`);

  } */

  registerClient(user: ClientModel){
    return this.http.post<ClientModel>(`${base_url}clientes`, user, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });

  }

  

  /* deleteUser(CategoryId: string): Observable<UserModel>{
    return this.http.delete<UserModel>(`${base_url}Users/${CategoryId}?access_token=${this.token}`)
    }; */

 /*  saveNewUser(Category: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${base_url}Users?access_token=${this.token}`, Category, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  saveNewClient(Category: ClientModel): Observable<ClientModel>{
    return this.http.post<ClientModel>(`${base_url}clientes?access_token=${this.token}`, Category, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
 */

}
