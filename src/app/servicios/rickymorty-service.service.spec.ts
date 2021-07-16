import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { CharactersService } from './characters.service';

import { RickymortyServiceService } from './rickymorty-service.service';

describe('RickymortyServiceService', () => {
  let service: RickymortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(RickymortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
