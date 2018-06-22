import {BaseEntity} from '../shared/base.entity';

export class Category extends BaseEntity {

  public _links;

  constructor(
    name: string
  ) {
    super(name);
  }
}
