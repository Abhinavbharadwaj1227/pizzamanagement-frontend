import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService{
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  login(admin: Admin): Observable<any> {
    return this.http.post(`${this.baseUrl}/postadmin`, admin);
  }

  postproducts(body:any){
    console.log(body);
    return this.http.post('http://localhost:8080/pizzatype/product',body)
  }
  getAdmins(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getadmin`);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getadmin/${id}`);
  }

  deleteAdmin(id: number){
    console.log(id);
    return this.http.delete(`${this.baseUrl}/admin/`+id);
  }
}
