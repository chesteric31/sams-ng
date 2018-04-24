import { TestBed, inject } from '@angular/core/testing';

import { ArmorService } from './armor.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ArmorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ArmorService, HttpClient, HttpHandler ]
    });
  });

  it('should be created', inject([ArmorService], (service: ArmorService) => {
    expect(service).toBeTruthy();
  }));
});
