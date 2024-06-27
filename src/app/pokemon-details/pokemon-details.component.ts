import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectPokemon} from "../store/pokedex/pokedex.actions";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon.model";
import {selectedPokemon} from "../store/pokedex/pokedex.selectors";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  pokemon$!: Observable<Pokemon | null>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.pokemon$ = this.store.select(selectedPokemon)
  }
}
