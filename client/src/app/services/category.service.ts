import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { UserService } from './user.service';

const base_url: string = 'http://localhost:3000/api/' 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken(); /* Acceder al token del usuario para la autorización */
  }

  token : string;

  getAllCategories():Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${base_url}Categories?access_token=${this.token}`);

  }

  getCategoryById(CategoryId: string): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${base_url}Categories/${CategoryId}?access_token=${this.token}`);
  }

  saveNewCategory(Category: CategoryModel): Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${base_url}Categories?access_token=${this.token}`, Category, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  updateCategory(Category: CategoryModel): Observable<CategoryModel>{
    return this.http.put<CategoryModel>(`${base_url}Categories?access_token=${this.token}`, Category, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  deleteCategory(CategoryId: string): Observable<CategoryModel>{
    return this.http.delete<CategoryModel>(`${base_url}Categories/${CategoryId}?access_token=${this.token}`)
    };
  }


