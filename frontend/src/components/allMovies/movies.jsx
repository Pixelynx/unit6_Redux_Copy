import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as util from '../../utils/apiCalls.js';

import '../../css/movies.css';

class Movies extends Component {



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



        <div className='remaining_space'>gbdfd</div>
      </div>

      <Route path='movies/byGenre' />
      </>
    )
  }
}


export default Movies;
