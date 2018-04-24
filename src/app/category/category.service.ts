import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../app.constants';
import 'rxjs/add/operator/map';
import {Category} from './category';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(SERVER_API_URL + 'categories')
      .map((data: any) => {
        return data._embedded.categories as Category[]
      });
  }

}
