import { SimplePokemon } from './../../pokemons/interfaces/simple-pokemon.interface';
import { PokemonService } from './../../pokemons/services/pokemon.service';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { ApplicationRef, ChangeDetectionStrategy, Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [
    RouterLink,
    PokemonListComponent,
    PokemonListSkeletonComponent
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonsPageComponent implements OnInit, OnDestroy{
  private pokemonsService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  public pokemons = signal<SimplePokemon[]>([]);
  public currentPage = toSignal<number>(
    this.route.params.pipe(
      map(params => params['page'] ?? '1'),
      map( page => (isNaN(+page) ? 1 : +page)),
      map( page => Math.max(1, page))
    )
  );
  public loadOnPageChange = effect(() => {
    this.loadPokemons(this.currentPage());
  }, {allowSignalWrites: true});
  /*
  public isLoading = signal(true);
  private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe( isStable => console.log({isStable}))
  */
  ngOnInit(): void {
    //console.log(this.currentPage());
    /*
    setTimeout(() => {
      this.isLoading.set(false);
    }, 5000);
    */
   //this.loadPokemons();
  }

  public loadPokemons(page = 0){
    this.pokemonsService.loadPage(page)
      .pipe(
        //tap(() => this.router.navigate([], {queryParams: {page: pageToLoad}})),
        tap(() => this.title.setTitle(`Pokemon SSr - Page ${page}`))
       )
      .subscribe( pokemons => {
        this.pokemons.set(pokemons);
      })
  }

  ngOnDestroy(): void {
    //this.$appState.unsubscribe();
  }

}
