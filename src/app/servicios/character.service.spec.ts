import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

import { CharactersService } from './characters.service';

describe('CharacterService', () => {
  let service: CharactersService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(CharactersService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  /*
  it('should set Datos', () => {
    const valueMock = [{name: 'rick'}, {name: 'morty'}];
    
    service.getAllCharacters();

    const request = http.expectOne('https://rickandmortyapi.com/api/character')
    //primer expect
    expect(request.request.method).toBe('GET');
    request.flush(valueMock)

    //segundo spect para ver el body de la req
    expect(service.datos).toEqual(valueMock)
    http.verify();
  });

*/
 /*
 
  getAllCharacters() {
    
    this.personajesService.getAllCharacters().subscribe(
      data => { this.respuesta = data, this.personajes = this.respuesta.results  }
      , err => { console.log(err)}
    )
  }



  
  it('should have all character from api', () => {

    let personajes: any
    service.getAllCharacters().subscribe(
      data => {
        personajes = data;
        console.log(personajes.results);
        expect(service.getAllCharacters().subscribe()).toBe(personajes.results);
      }
    )
  });
 */
});
