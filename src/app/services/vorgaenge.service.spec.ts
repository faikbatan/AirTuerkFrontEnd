/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VorgaengeService } from './vorgaenge.service';

describe('Service: Vorgaenge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VorgaengeService]
    });
  });

  it('should ...', inject([VorgaengeService], (service: VorgaengeService) => {
    expect(service).toBeTruthy();
  }));
});
