import { TestBed } from '@angular/core/testing';

import { CustomeNodeService } from './custome-node.service';

describe('CustomeNodeService', () => {
  let service: CustomeNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
