import { TestBed } from '@angular/core/testing';

import { DoctorSearchService } from '../services/doctor-search.service';

describe('DoctorSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorSearchService = TestBed.get(DoctorSearchService);
    expect(service).toBeTruthy();
  });
});
