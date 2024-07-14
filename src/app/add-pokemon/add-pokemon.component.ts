import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from "rxjs";
import {Base} from "../models/base.model";
import {Store} from "@ngrx/store";
import {pokedexError, pokedexLoading, typesList} from "../store/pokedex/pokedex.selectors";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent implements OnInit {
  types$!: Observable<Base[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<null | string>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.types$ = this.store.select(typesList)
    this.loading$ = this.store.select(pokedexLoading)
    this.error$ = this.store.select(pokedexError)
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
