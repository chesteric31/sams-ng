import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';

import {Category} from './category';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Category[]>(SERVER_API_URL + 'categories')
      .pipe(
        map((data: any) => {
          return data._embedded.categories;
      }));
  }

  getByName(name: string) {
    return this.http.get<Category>(SERVER_API_URL + 'categories' + '/search/findByNameAllIgnoringCase?name=' + name)
    .pipe(
      map((data: any) => {
        return data._embedded.categories;
    }));
  }


}
