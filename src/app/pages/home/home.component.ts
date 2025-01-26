import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,  // Mark as standalone component
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;  // Store the fetched movies
    });
  }
}
