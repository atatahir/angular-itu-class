import { TestBed } from '@angular/core/testing';

import { ExperimentStateService } from './experiment-state.service';

describe('ExperimentStateService', () => {
  let service: ExperimentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
