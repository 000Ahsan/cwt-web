import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Products } from '../../../shared/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listData: Products[] | undefined;

  private http = inject(HttpClient);
  products(): Observable<Products[]> {
    return this.http.get<Products[]>('assets/data/product.json');
  }

  public getProduct(id: number): Observable<Products | undefined> {
    return this.products().pipe(map((items: Products[]) => items.find(item => item.id === id)));
  }
}
