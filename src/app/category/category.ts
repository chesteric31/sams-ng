import {BaseEntity} from '../shared/base.entity';

export class Category extends BaseEntity {

  constructor(
    name: string
  ) {
    super(name);
  }
}
