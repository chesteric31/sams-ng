import {BaseEntity} from '../shared/base.entity.model';

export class Category extends BaseEntity {

  constructor(
    name: string
  ) {
    super(name);
  }
}
