import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';
import {Strength} from './strength.model';

@Injectable()
export class StrengthService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(SERVER_API_URL + 'strengths')
      .map((data: any) => {
        return data._embedded.strengths as Strength[]
      });
  }

}
