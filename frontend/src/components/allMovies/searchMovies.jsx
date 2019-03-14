import React from 'react';

export const SearchMovies = ({ displayMovies, search_input, formSubmitted, props}) => {
  let filterMovies
  let searchedMovies

  if(search_input && formSubmitted) {
      filterMovies = props.movies.filter(movie => {
        movie = movie.title.toLowerCase();
        return movie === search_input.toLowerCase()
      })
      filterMovies.map(movie => {
        let poster = {
              backgroundImage: 'url(' + movie.img_url + ')',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '100px',
              height: '100px'
          }
       return(
       <>
         <div className="movie_title">{movie.title}</div>
         <div className="movie_img" style={poster}></div>
       </>

       )
     })
   } else return displayMovies()

}
