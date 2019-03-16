/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AASMSService } from './aasms.service';

describe('AASMSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AASMSService]
    });
  });

  it('should ...', inject([AASMSService], (service: AASMSService) => {
    expect(service).toBeTruthy();
  }));
});
