import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {pokedexReducer} from "./store/pokedex/pokedex.reducer";
import {PokedexEffects} from "./store/pokedex/pokedex.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from "@angular/common/http";
import {PokedexModule} from "./pokedex/pokedex.module";
import {PokemonDetailsModule} from "./pokemon-details/pokemon-details.module";
import {AddPokemonModule} from "./add-pokemon/add-pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({pokedex: pokedexReducer}, {}),
    EffectsModule.forRoot([PokedexEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    PokedexModule,
    PokemonDetailsModule,
    AddPokemonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
