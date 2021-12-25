import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listPokemons: any[]= [];
  page= 1;
  totalPokemons: number=0;


  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){

    this.DataService.getPokemons(21, this.page+0).subscribe((response: any) => {
      this.totalPokemons= response.count;
      response.results.forEach((element: any) => {
        this.DataService.getFinalDataPokemon(element.name).subscribe((unic: any )=> {
          this.listPokemons.push(unic);
        })
      });
    });
  }
}


