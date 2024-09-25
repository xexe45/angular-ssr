import { Pokemon } from './../interfaces/pokemon.interface';
import { APIResponse } from './../interfaces/pokemon-api.response';
import { SimplePokemon } from './../interfaces/simple-pokemon.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  constructor() { }

  public loadPage(page: number): Observable<SimplePokemon[]>{
    if(page !== 0){
      --page;
    }
    page = Math.max(0, page);
    return this.http.get<APIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
      .pipe(
        map(resp => {
          const simplePokemons: SimplePokemon[] = resp.results.map(pokemon => ({ id: pokemon.url.split('/').at(-2) ?? '', name: pokemon.name }));
          return simplePokemons;
        })
      )
  }

  public loadPokemon(id: string){
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
