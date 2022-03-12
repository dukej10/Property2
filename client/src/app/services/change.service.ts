import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { ChangeModel } from "../models/change.model";

const base_url: string = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root",
})
export class ChangeService {
  constructor(private http: HttpClient, private userService: UserService) {
    this.token =
      this.userService.getToken(); /* Acceder al token del usuario para la autorización */
  }

  token: string;

  getAllChanges(): Observable<ChangeModel[]> {
    return this.http.get<ChangeModel[]>(
      `${base_url}changesLog?access_token=${this.token}`
    );
  }

  getChangeById(ChangeId: string): Observable<ChangeModel> {
    return this.http.get<ChangeModel>(
      `${base_url}changesLog/${ChangeId}?access_token=${this.token}`
    );
  }

  saveNewChange(change: ChangeModel): Observable<ChangeModel> {
    return this.http.post<ChangeModel>(
      `${base_url}changesLog?access_token=${this.token}`,
      change,
      {
        headers: new HttpHeaders({
          "content-type": "application/json",
        }),
      }
    );
  }

  deleteChange(changeId: string): Observable<ChangeModel> {
    return this.http.delete<ChangeModel>(
      `${base_url}changesLog/${changeId}?access_token=${this.token}`
    );
  }
}
