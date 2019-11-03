import { TestBed } from '@angular/core/testing';

import { DoctorHomeService } from './doctor-home.service';

describe('DoctorHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorHomeService = TestBed.get(DoctorHomeService);
    expect(service).toBeTruthy();
  });
});
