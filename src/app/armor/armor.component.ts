import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category/category.service';
import {Category} from '../category/category';
import {ArmorService} from './armor.service';
import {Armor} from './armor';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {

  private armors: Armor[];

  constructor(
    private service: ArmorService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this.armors = data,
      error => console.error(error)
    )
  }

}
