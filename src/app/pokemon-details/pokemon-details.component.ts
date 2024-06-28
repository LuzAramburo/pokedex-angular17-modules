import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon.model";
import {pokedexError, pokedexLoading, selectedPokemon} from "../store/pokedex/pokedex.selectors";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  pokemon$!: Observable<Pokemon | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private store: Store,
    protected route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.pokemon$ = this.store.select(selectedPokemon)
    this.loading$ = this.store.select(pokedexLoading)
    this.error$ = this.store.select(pokedexError)

    // this.route.data.subscribe if i wanted the data form the resolver
    // this.pokemon$.subscribe(
    //   (pokemon) => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${this.route.snapshot.params['pokemonId']}/`
    //     if (!pokemon) this.store.dispatch(loadPokemonDetails({url}))
    //   }
    // )
  }
}
