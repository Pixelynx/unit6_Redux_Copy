import { FETCH_MOVIES } from '../actions/types.js';
let initialState = {}

export const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES:
    let allMovies = normalize(action.movies)
    return allMovies
    default:
      return state;
  }
};


const normalize = (arr) => {
  let obj = {}
  arr.forEach(el => {
    obj[el.id] = el
  })
  return obj;
}
