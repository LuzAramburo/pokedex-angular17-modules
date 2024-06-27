import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokedexComponent} from "./pokedex.component";
import { PokedexItemComponent } from './pokedex-item/pokedex-item.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexItemComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class PokedexModule {
}
