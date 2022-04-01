import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Iproduct} from 'src/app/data/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  
  urlServer='http://localhost:3000/product/';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Iproduct[]>{
  return this.http.get<Iproduct[]>(this.urlServer);    
  }

  getProductById(id:number):Observable<Iproduct> {
    return this.http.get<Iproduct>(this.urlServer + 'id');
  }

  putProduct(id:number, data:Iproduct){
    return this.http.put<Iproduct>(this.urlServer + id , data);
  }

  postProduct(data:Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(this.urlServer , data);
  }

  deleteProduct(id:number):Observable<Iproduct>{
    return this.http.delete<Iproduct>(this.urlServer+id)
  }

}


