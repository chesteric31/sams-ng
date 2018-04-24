import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';
import {Armor} from './armor';

@Injectable()
export class ArmorService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(SERVER_API_URL + 'armors')
      .map((data: any) => {
        return data._embedded.armors as Armor[]
      });
  }

}
