import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private _categories: Category[];

  constructor(
    private service: CategoryService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this._categories = data,
      error => console.error(error)
    )
  }

  get categories() {
    return this._categories;
  }

  set categories(categories: Category[]) {
    this._categories = categories;
  }

}
