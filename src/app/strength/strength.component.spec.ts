import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthComponent } from './strength.component';
import {StrengthService} from './strength.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('StrengthComponent', () => {
  let component: StrengthComponent;
  let fixture: ComponentFixture<StrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthComponent ],
      providers: [ StrengthService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
