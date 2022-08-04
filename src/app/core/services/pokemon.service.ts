import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon.list';
import { PokemonDetail } from '../models/pokemon.detail';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(
    offset: number,
    limit: number = 20
  ): Observable<PokemonList[]> {
    return this.http
      .get<PokemonList[]>(`${BASE_URL}pokemon?offset=${offset}&limit=${limit}`)
      .pipe(map((x: any) => x.results));
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${BASE_URL}pokemon/${pokemon}`);
  }
}
