import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('data/product.json');
  }

  getProduct(id: string): Observable<any> {
    return this.http.get('data/product.json').pipe(
      map((data: Array<any>) => {
        return data.filter(x => x.id === id);
      })
    );
  }

}
