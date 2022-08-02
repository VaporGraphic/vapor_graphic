import { TestBed } from '@angular/core/testing';

import { SocialUrlsServiceService } from './social-urls-service.service';

describe('SocialUrlsServiceService', () => {
  let service: SocialUrlsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialUrlsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
