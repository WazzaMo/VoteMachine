import { TestBed, inject } from '@angular/core/testing';

import { VoteDatabaseService } from './vote-database.service';

describe('VoteDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteDatabaseService]
    });
  });

  it('should ...', inject([VoteDatabaseService], (service: VoteDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
