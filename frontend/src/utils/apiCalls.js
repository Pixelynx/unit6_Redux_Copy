import axios from "axios";

export const fetchAllMovies = () => ('/movies');
export const fetchMovieById = (id) => (`/movies/${id}`);
export const fetchMovieByGenre = (genre) => (`/movies/${genre}`);
