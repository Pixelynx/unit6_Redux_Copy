import Movies from '../allMovies/movies.jsx';
import { fetchAllMovies } from '../../actions/movieActions.js';
import { connect } from 'react-redux'

export const mapStateToProps = (state) => {
  console.log('State:', state)
  return ({
    movies: state.movieReducer
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchMovies: () => dispatch(fetchAllMovies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
