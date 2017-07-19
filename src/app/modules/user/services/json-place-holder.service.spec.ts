import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http'; 

import { JsonPlaceHolderService } from './json-place-holder.service';

describe('Service: JsonPlaceHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers: [JsonPlaceHolderService]
    });
  });

  it('should be created', inject([JsonPlaceHolderService], (service: JsonPlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
