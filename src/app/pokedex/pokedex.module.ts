import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {PokedexComponent} from "./pokedex.component";

@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PokedexModule {
}
