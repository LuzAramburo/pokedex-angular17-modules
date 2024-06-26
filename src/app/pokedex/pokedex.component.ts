import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadPokedex} from "../store/pokedex/pokedex.actions";
import {Observable} from "rxjs";
import {Result} from "../models/pokedex.model";
import {pokedexError, pokedexList, pokedexLoading} from "../store/pokedex/pokedex.selectors";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {
  pokedex$!: Observable<Result[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<null | string>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(loadPokedex())
    this.pokedex$ = this.store.select(pokedexList)
    this.loading$ = this.store.select(pokedexLoading)
    this.error$ = this.store.select(pokedexError)
  }

}
