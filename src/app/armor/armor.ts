import {BaseEntity} from '../shared/base.entity';
import { Category } from '../category/category';

export class Armor extends BaseEntity {

  constructor(name: string, private category: Category) {
    super(name);
  }
}
