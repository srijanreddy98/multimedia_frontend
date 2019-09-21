import { TestBed } from '@angular/core/testing';

import { MusicDataService } from './music-data.service';

describe('MusicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicDataService = TestBed.get(MusicDataService);
    expect(service).toBeTruthy();
  });
});
