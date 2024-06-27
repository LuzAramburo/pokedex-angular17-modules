import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class PokemonDetailsModule { }
