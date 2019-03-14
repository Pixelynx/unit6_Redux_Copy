import { FETCH_MOVIES } from '../actions/types.js';

export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return [...state, action.payload];
    default:
      return state;
  }
};
