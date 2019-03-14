import axios from 'axios';
import { FETCH_MOVIES } from './types.js';

export const fetchAllMovies = () => {
  return(dispatch) => {
    return axios.get('/movies')
      .then(res => {
        dispatch(fetchMoviesSuccessful(res.data.body))
      })
      .catch(err => console.log(err))
  };
};

export const fetchMoviesSuccessful = (movies) => {
  return {
    type: FETCH_MOVIES,
    movies: movies
  }
}
