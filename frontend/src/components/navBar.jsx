import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/navBar.css';

class NavBar extends Component {
  render() {
    return(
      <>
        <div className='nav_wrapper'>
          <nav className='nav'>
              <Link className='home_link' to='/'>Home</Link>
              <Link className='movies' to='/movies'>Movies</Link>
              <Link className='movie_by_genre' to='/movies/byGenre'>Genre</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default NavBar;
