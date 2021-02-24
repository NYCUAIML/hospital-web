import { TestBed } from '@angular/core/testing';

import { FormRendService } from './form-rend.service';

describe('FormRendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormRendService = TestBed.get(FormRendService);
    expect(service).toBeTruthy();
  });
});
