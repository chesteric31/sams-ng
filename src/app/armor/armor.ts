import {BaseEntity} from '../shared/base.entity';

export class Armor extends BaseEntity {

  public _links;
  constructor(public name: string, public category: string) {
    super(name);
  }
}
