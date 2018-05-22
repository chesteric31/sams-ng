import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';
import {Armor} from './armor';
import { map } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class ArmorService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Armor[]>(SERVER_API_URL + 'armors')
      .pipe(
        map((data: any) => {
          console.log(data._embedded.armors);
          return data._embedded.armors;
      }));
  }

  save(category: Category) {
    let armor = new Armor('Cygnus', category);
    return this.http.post(SERVER_API_URL + 'armors', armor);
  }

}
