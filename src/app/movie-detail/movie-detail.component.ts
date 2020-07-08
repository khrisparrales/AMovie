import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesRepositoryService } from '../movies/services/movies-repository.service';
import { Movie } from '../movies/models/movie.model';
import { FadeIn } from '../shared/animations';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: [
    FadeIn
  ]
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: Movie = null;
  error: string = null;
  url: string = "https://www.mmlpqtpkasjdashdjahd.com";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer:DomSanitizer,
    private moviesRepositoryService: MoviesRepositoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
        }

  getMovie(id: number) {

    this.moviesRepositoryService.getMovieById(id)
    .subscribe(
      data => {
        this.movie = data ;


        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
    },
      err => this.error = err
    );

  }
}
