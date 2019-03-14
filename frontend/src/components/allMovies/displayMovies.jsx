import React from 'react';

export const DisplayMovies = ({ movies }) => {
  return(
    <>
    {movies ?
      movies.map(movie => {
        let bgImg = {
          backgroundImage: 'url(' + movie.img_url + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100px',
          height: '100px'
        }
        return (
          <>
            <div key={movie.id} className='movie_title'>{movie.title}</div>
            <div className='movie_img' style={bgImg}></div>
          </>
        )
      }) : <p>No movies to list</p> }
    </>
  )
}
