import {BaseEntity} from '../shared/base.entity';
import {Category} from '../category/category';
import {ArmorVersion} from './armorVersion';

export class Armor extends BaseEntity {

  public _links;
  public versions: Array<ArmorVersion>;
  constructor(public name: string, public category: Category) {
    super(name);
  }
}
