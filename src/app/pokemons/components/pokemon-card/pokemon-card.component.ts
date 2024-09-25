import { RouterLink } from '@angular/router';
import { SimplePokemon } from './../../interfaces/simple-pokemon.interface';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();
  public readonly pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`);
}
