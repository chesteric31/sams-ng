import {BaseEntity} from '../shared/base.entity';
import {Category} from '../category/category';
import {Url} from 'url';

export class ArmorVersion extends BaseEntity {

  public _links;
  constructor(public name: string, public image: string) {
    super(name);
  }
}
