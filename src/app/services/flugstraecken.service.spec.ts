/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlugstraeckenService } from './flugstraecken.service';

describe('Service: Flugstraecken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlugstraeckenService]
    });
  });

  it('should ...', inject([FlugstraeckenService], (service: FlugstraeckenService) => {
    expect(service).toBeTruthy();
  }));
});
