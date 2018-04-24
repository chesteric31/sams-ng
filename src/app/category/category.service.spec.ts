import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
