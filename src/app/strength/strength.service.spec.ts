import { TestBed, inject } from '@angular/core/testing';

import { StrengthService } from './strength.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('StrengthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrengthService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([StrengthService], (service: StrengthService) => {
    expect(service).toBeTruthy();
  }));
});
