/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgenturService } from './agentur.service';

describe('Service: Agentur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenturService]
    });
  });

  it('should ...', inject([AgenturService], (service: AgenturService) => {
    expect(service).toBeTruthy();
  }));
});
