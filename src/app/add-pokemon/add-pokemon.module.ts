import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPokemonComponent } from './add-pokemon.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddPokemonModule { }
