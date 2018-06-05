import {BaseEntity} from '../shared/base.entity';
import { Category } from '../category/category';

export class Armor extends BaseEntity {

  public _links;
  constructor(public name: string, public category: Category) {
    super(name);
  }
}
