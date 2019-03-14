import axios from 'axios';
import * as util from '../../utils/apiCalls.js';
import { fetchAllMovies } from '../movieActions.js';

export const fetchMovies = () => (dispatch) => {

  return util.fetchAllMovies()
              .then(res => {
                dispatch(displayPosts(res.data.movies))
              })
              .catch(err => console.log(err))

  };
