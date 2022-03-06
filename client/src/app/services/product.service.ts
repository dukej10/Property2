import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PropertyModel } from "../models/product.model";
import { Observable } from "rxjs";
import { ProductModule } from "../product/product.module";
import { UserService } from "./user.service";

const base_url: string = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }

  token: string;

  getAllProducts(): Observable<PropertyModel[]> {
    return this.http.get<PropertyModel[]>(
      `${base_url}properties?access_token=${this.token}`
    );
  }

  getProductById(productId: string): Observable<PropertyModel> {
    return this.http.get<PropertyModel>(
      `${base_url}properties/${productId}?access_token=${this.token}`
    );
  }

  /*  saveNewProduct(product: PropertyModel): Observable<PropertyModel>{
    return this.http.post<PropertyModel>(`${base_url}properties?access_token=${this.token}`, product, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  } */

  saveNewProduct(product: PropertyModel): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(
      `${base_url}properties?access_token=${this.token}`,
      product,
      {
        headers: new HttpHeaders({
          "content-type": "application/json",
        }),
      }
    );
  }

  /* Me actualiza el producto seleccionado */
  updateProduct(product: PropertyModel): Observable<PropertyModel> {
    return this.http.put<PropertyModel>(
      `${base_url}properties?access_token=${this.token}`,
      product,
      {
        headers: new HttpHeaders({
          "content-type": "application/json",
        }),
      }
    );
  }

  deleteProduct(productId: string): Observable<PropertyModel> {
    return this.http.delete<PropertyModel>(
      `${base_url}properties/${productId}?access_token=${this.token}`
    );
  }
}
