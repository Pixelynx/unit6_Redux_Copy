import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';
import { DisplayMovies } from './displayMovies.jsx';
import Genres from '../genres/fetchGenre.jsx'

import '../../css/movies.css';

class Movies extends Component {
  state = {
    movieList: [],
    searchInput: ''
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    axios.get('/movies')
    .then(res => {
      this.setState({ movieList: res.data.body })
    })
  }

  handleSearchInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.searchMovies()
    console.log(this.state)
  }

  searchMovies = () => {
    if(this.state.searchInput) {
      this.state.movieList.filter(movie => {

        let movie_title = movie.title.toLowerCase();
        let movie_ = String(this.state.movieList).toLowerCase();
        let search_ = String(this.state.searchInput).toLowerCase();
        let bgImg = {
          backgroundImage: 'url(' + movie_.img_url + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100px',
          height: '100px'
      };
      if(movie_title === search_) {
      return (
        <>
          <div key={movie.id} className='movie_title'>
            {movie.title}
            <img src={movie.img_url} alt="" />
          </div>
          <div className='movie_img' style={bgImg}></div>
        </>
      )
    }
        })
      }
  }


  render() {
    const { movieList, searchInput } = this.state
    console.log(this.state.searchInput)
    console.log(this.state);

    return(
      <>
      <div className='movie_body'>

        <h1>All Movies</h1>

        <form className='search_movies' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='searchInput'
            className='search_input'
            placeholder='Search Movies'
            onChange={this.handleSearchInput}></input>
          <input type='submit' value='Search'></input>
        </form>
        <DisplayMovies
          movies={movieList}
          searchMovies={this.searchMovies}
          />


        <div className='remaining_space'>gbdfd</div>
      </div>

      <Route path='movies/byGenre' component={Genres}/>
      </>
    )
  }
}


export default Movies;
