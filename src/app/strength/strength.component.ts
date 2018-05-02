import { Component, OnInit } from '@angular/core';
import {StrengthService} from './strength.service';
import {Strength} from './strength';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {

  private _strengths: Strength[];

  constructor(
    private service: StrengthService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this._strengths = data,
      error => console.error(error)
    )
  }

  get strengths() {
    return this._strengths;
  }

  set strengths(strengths: Strength[]) {
    this._strengths = strengths;
  }

}
