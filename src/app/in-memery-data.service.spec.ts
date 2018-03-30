import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memery-data.service';

describe('InMemeryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
