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
    </>
  )
}
