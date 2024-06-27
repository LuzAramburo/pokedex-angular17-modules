import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {Store} from "@ngrx/store";
import {selectPokemon} from "../../store/pokedex/pokedex.actions";

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrl: './pokedex-item.component.css'
})
export class PokedexItemComponent {
  @Input({required: true}) pokemon!: Pokemon;

  constructor(
    private store: Store
  ) {
  }

  onSelectPokemon(pokemon: Pokemon) {
    this.store.dispatch(selectPokemon({pokemon}))
  }
}
