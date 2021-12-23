import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listPokemons: any[]= [];

  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {

    this.DataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((element: any) => {
        this.DataService.getFinalDataPokemon(element.name).subscribe((originalResponse: any) => {
          this.listPokemons.push(originalResponse);
          console.log(this.listPokemons);
        });
      });
    });
  }
}
