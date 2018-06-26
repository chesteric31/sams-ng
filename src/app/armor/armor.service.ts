import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';
import {Armor} from './armor';
import {map} from 'rxjs/operators';
import {Category} from '../category/category';
import {ArmorVersion} from './armorVersion';

@Injectable()
export class ArmorService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll() {
    return this.http.get<Armor[]>(SERVER_API_URL + 'armors')
      .pipe(
        map((data: any) => {
          return data._embedded.armors;
        }),
        map((armors: Armor[]) => {
          armors.forEach(armor => {
            this.http.get<Category>(armor._links.category.href).subscribe(href => {
              armor.category = href;
            });
          });
          return armors;
        }),
        map((armors: Armor[]) => {
          armors.forEach(armor => {
            this.http.get<ArmorVersion[]>(armor._links.versions.href).subscribe((data: any) => {
              armor.versions = data._embedded.armorVersions;
            });
          });
          return armors;
        })
      );
  }

  // save(categories: Category[]) {
  //   // console.log('pre post', categories[0]._links.armorCategory.href);
  //   let armor = new Armor('Cygnus', categories[0]._links.armorCategory.href);
  //   console.log('pre post', armor);
  //   return this.http.post(SERVER_API_URL + 'armors', armor);
  // }

}
