import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categories: Category[];

  constructor(
    private service: CategoryService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this.categories = data,
      error => console.error(error)
    )
  }

}
