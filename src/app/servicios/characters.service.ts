import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterObj } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  datos: any[]

  constructor(private htppClient: HttpClient) {
  }

  getAllCharacters() {
    return this.htppClient.get('https://rickandmortyapi.com/api/character');
  }


  getCharacterById(id: Number): Observable<any> {
    
    return this.htppClient.get<any>('https://rickandmortyapi.com/api/character/'+id)
  }

  getCharactersNext(url: string): Observable<any> {
    
    return this.htppClient.get<any>(url);
  }


  getCharactersPrevious(url: string): Observable<any> {
    
    return this.htppClient.get<any>(url);
  }
}
