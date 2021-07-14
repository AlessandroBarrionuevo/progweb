import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickymortyServiceService {

  constructor(private htppClient: HttpClient) { }

  getEpisodes() {
    
    return this.htppClient.get('https://rickandmortyapi.com/api/episode');
  }

  getNextEpisodes(url: string): Observable<any> {
    
    return this.htppClient.get<any>(url);
  }


  getPreviousEpisodes(url: string): Observable<any> {
    
    return this.htppClient.get<any>(url);
  }
}

  

