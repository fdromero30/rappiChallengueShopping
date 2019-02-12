import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor( private http: HttpClient) { }

  
getCategoriasJson(){

     let path = '../../assets/dataJson/categories.json';
     return this.http.get(path);
}

getProductsJson(){

    let path = '../../assets/dataJson/products.json';
    return this.http.get(path);
}

}

