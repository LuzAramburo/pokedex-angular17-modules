import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {combineLatest, map, mergeMap} from "rxjs";
import {PokedexResponse} from "../models/pokedex.model";
import {Pokemon} from "../models/pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getPokedex() {
    return this.httpClient.get<PokedexResponse>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=121').pipe(
      map(response => response.results),
      mergeMap(pokedexList =>
        combineLatest(pokedexList.map(pokemon =>
            this.getPokemonDetails(pokemon.url).pipe(
              map(pokemonResponse => ({
                ...pokemonResponse,
                url: pokemon.url
              })),
            )
          )
        ),
      ),
    )
  }

  getPokemonDetails(url: string) {
    return this.httpClient.get<Pokemon>(url)
  }
}
