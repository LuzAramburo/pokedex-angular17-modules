import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrl: './pokedex-item.component.css'
})
export class PokedexItemComponent {
  @Input({required: true}) pokemon!: Pokemon;
}
