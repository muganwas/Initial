import { TestBed, inject } from '@angular/core/testing';

import { InMemeryDataService } from './in-memery-data.service';

describe('InMemeryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemeryDataService]
    });
  });

  it('should be created', inject([InMemeryDataService], (service: InMemeryDataService) => {
    expect(service).toBeTruthy();
  }));
});
