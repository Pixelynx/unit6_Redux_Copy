import React from 'react';

export const DisplayMovies = (props) => {
  let movies = Object.values(props.movies)

  return(
    <>
    {movies.map(movie => {

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
    })}

    </>
  )
}
