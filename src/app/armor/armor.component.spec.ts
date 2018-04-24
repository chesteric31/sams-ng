import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorComponent } from './armor.component';
import {ArmorService} from './armor.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ArmorComponent', () => {
  let component: ArmorComponent;
  let fixture: ComponentFixture<ArmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorComponent ],
      providers: [ ArmorService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
