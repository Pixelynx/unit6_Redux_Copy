import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';
import { SearchMovies } from './searchMovies.jsx';
// import { DisplayMovies } from './displayMovies.jsx';

import '../../css/movies.css';

class Movies extends Component {
  state = {
    search_input: "",
    formSubmitted: false
  }

  componentDidMount = () => {
    this.props.fetchMovies()
  }

  handleSearch = (e) => {
    this.setState({ search_input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ formSubmitted: true })
  }

  displayMovies = () => {
    const movies = Object.values(this.props.movies)
    const { formSubmitted, search_input } = this.state

        if(formSubmitted && search_input) {
          let searchedMovie = movies.filter(movie => {
            return movie.title.toLowerCase() === search_input.toLowerCase()
          })
          searchedMovie.map(movie => {
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
      } else {
        let filterMovies = movies.filter(movie => {
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
          return filterMovies
        }
  }

  render() {
    console.log(this.state)
    const { formSubmitted, search_input } = this.state
    const displayMovies = this.displayMovies()


    return(
      <>
      <div className='movie_body'>

        <h1>All Movies</h1>

        <form className='search_movies' onSubmit={this.handleSubmit}>

          <input
            type='text'
            name='search_input'
            className='search_input'
            placeholder='Search Movies'
            onChange={this.handleSearch}
            ></input>

          <input type='submit' value='Search'></input>
        </form>
        {displayMovies}

      </div>

      <Route path='movies/byGenre' />
      </>
    )
  }
}


export default Movies;





// <SearchMovies
//   movies={this.props.movies}
//   formSubmitted={formSubmitted}
//   search_input={search_input}
//   displayMovies={this.displayMovies}/>
