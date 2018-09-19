import { TestBed, inject } from '@angular/core/testing';

import { StateMachineService } from './state-machine.service';

describe('StateMachineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateMachineService]
    });
  });

  it('should be created', inject([StateMachineService], (service: StateMachineService) => {
    expect(service).toBeTruthy();
  }));
});
