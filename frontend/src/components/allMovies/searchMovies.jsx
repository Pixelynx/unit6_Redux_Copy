import React from 'react';

export const SearchMovies = (props) => {

  // Need better way to display movies in func-comp -- bg style

  return(
    <>

    <form className='search_movies'>
      <input
        type='text'
        className='search_input'
        placeholder='Search Movies'></input>
      <input type='submit' value='Search'></input>
    </form>

    {this.props.searchInput ?
      this.props.movieList.filter(movie => {
        let movie_ = String(this.props.movieList).toLowerCase();
        let search_ = String(this.props.searchInput).toLowerCase();
        let bgImg = {
          backgroundImage: 'url(' + movie_.img_url + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100px',
          height: '100px'
      };
        if(search_ === movie_) {
          return(
            <>
              <div key={movie_.id} className='movie_title'>{movie_.title}</div>
              <div className='movie_img' style={bgImg}></div>
            </>
          )
        }
      }) : <p className='test'>Doesn't Exist</p>
    }
    </>
  )
}
