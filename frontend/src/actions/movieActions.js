import axios from 'axios';
import { FETCH_MOVIES } from './types.js';

export const fetchAllMovies = () => {
  return(dispatch) => {
    return axios.get('/movies')
      .then(res => {
        dispatch(fetchMoviesSuccessful(res.data))
      })
      .catch(err => console.log(err))
  };
};

export const fetchMoviesSuccessful = (movies) => {
  return {
    type: FETCH_MOVIES,
    payload: {
      movies
    }
  }
}
