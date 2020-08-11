import { Injectable } from '@angular/core';

@Injectable()
export class FilterMoviesService {
  constructor() { }

  filterMovies(filter: string, movies: any) {
    if (!filter || filter === 'Todas') {
      return movies;
    }
    return movies.filter(c => c.genres.includes(filter));
  }
}
