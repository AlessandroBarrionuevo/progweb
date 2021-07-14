import { Component, OnInit } from '@angular/core';
import { RickymortyServiceService } from 'src/app/servicios/rickymorty-service.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  next:string
  episodios: any
  listaEpisodios: any[] 
  constructor(private serviceRickYMorty: RickymortyServiceService) { }

  ngOnInit(): void {
    this.getAllEpisodes()
  }

  getAllEpisodes() {
    this.episodios = this.serviceRickYMorty.getEpisodes().subscribe(
      data => {
        this.episodios = data
        ,this.listaEpisodios = this.episodios.results
      },
      err => { console.log(err)}
    );
    console.log(this.episodios)
  }

  getNextEpisodes(next: string) {
   
    this.serviceRickYMorty.getNextEpisodes(next).subscribe(
      data => {
        this.episodios = data
        ,this.listaEpisodios = this.episodios.results, console.dir(this.episodios)
      },
      err => { console.log(err)}
    );
    console.log(this.episodios)
  }

  getPreviousEpisodes(next: string) {
   
    this.serviceRickYMorty.getPreviousEpisodes(next).subscribe(
      data => {
        this.episodios = data
        ,this.listaEpisodios = this.episodios.results, console.dir(this.episodios)
      },
      err => { console.log(err)}
    );
    console.log(this.episodios)
  }

}
