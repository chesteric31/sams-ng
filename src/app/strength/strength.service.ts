import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';
import {Strength} from './strength';
import { map } from 'rxjs/operators';

@Injectable()
export class StrengthService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Strength[]>(SERVER_API_URL + 'strengths')
      .pipe(
        map((data: any) => {
          return data._embedded.strengths;
      }));
  }

}
