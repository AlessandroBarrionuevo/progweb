import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterObj } from 'src/app/models/character';
import { CharactersService } from 'src/app/servicios/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  //atributos
  objRecibido: any
  idRecibido: number
  constructor(private characterService: CharactersService, private route: ActivatedRoute) {
    this.idRecibido = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  this.getCharacterById(this.idRecibido)
  }

  getCharacterById(id: Number){

    this.characterService.getCharacterById(id).subscribe(
      data => { this.objRecibido = data ,console.dir(this.objRecibido) 
      }
      , err => { console.log(err) }
    )    

  }

 


}
