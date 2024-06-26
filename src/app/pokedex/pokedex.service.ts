import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {PokedexResponse} from "../models/pokedex.model";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPokedex() {
    return this.httpClient.get<PokedexResponse>('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0').pipe(
      map(response => response.results),
    )
  }
}
