import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/servicios/characters.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  respuesta:any
  personajes:any[]

  constructor(private personajesService: CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters()
  }

  getAllCharacters() {
    
    this.personajesService.getAllCharacters().subscribe(
      data => { this.respuesta = data, this.personajes = this.respuesta.results  }
      , err => { console.log(err)}
    )
  }

  getNextPage(url:string) {
    this.personajesService.getCharactersNext(url).subscribe(
      data => { this.respuesta = data, this.personajes = this.respuesta.results  }
      , err => { console.log(err)}
    )
  }

  getPreviousPage(url:string) {
    this.personajesService.getCharactersPrevious(url).subscribe(
      data => { this.respuesta = data, this.personajes = this.respuesta.results  }
      , err => { console.log(err)}
    )
  }


}
