// Movies
id
title - The movie's title.
genre_id - Movies have one genre. A genre can be applied to many movies.
img_url - A nice image for the movie - perhaps a poster?

// Genres
id
name - The genre name. Say, action, or comedy.

// Ratings
id
stars - The number of stars the user rated the movie, from 1 to 5.
movie_id - Movies can have many ratings. A rating can only be applied to one movie.

// Comments
id
text - What the comment said.
movie_id - Comments can only be applied to one movie. A movie can have many comments.
