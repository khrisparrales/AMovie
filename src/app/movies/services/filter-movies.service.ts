import { Injectable } from '@angular/core';

@Injectable()
export class FilterMoviesService {
  constructor() { }

  filterMovies(filter: string, movies: any) {
    if (!filter || filter === 'todas') {
      return movies;
    }
    return movies.filter(c => c.genres.includes(filter));
  }
}
