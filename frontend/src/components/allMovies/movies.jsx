import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';
import { DisplayMovies } from './displayMovies.jsx';

import '../../css/movies.css';

class Movies extends Component {

  componentDidMount = () => {
    this.props.fetchMovies()
  }

  displayAllMovies = () => {
    let movies = Object.values(this.props.movies)
    return movies.map(movie => {

      let poster = {
            backgroundImage: 'url(' + movie.img_url + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100px',
            height: '100px'
        }

      return(
        <div key={movie.id} className="movie_body">
          <p className="movie_title">{movie.title}</p>
          <div className="posterImg" style={poster}></div>

        </div>
      )
    })
  }

  render() {
    return(
      <>
      <div className='movie_body'>

        <h1>All Movies</h1>

        <form className='search_movies'>
          
          <input
            type='text'
            name='searchInput'
            className='search_input'
            placeholder='Search Movies'
            ></input>

          <input type='submit' value='Search'></input>
        </form>

        <DisplayMovies
          movies={this.props.movies}
          />
      </div>

      <Route path='movies/byGenre' />
      </>
    )
  }
}


export default Movies;
