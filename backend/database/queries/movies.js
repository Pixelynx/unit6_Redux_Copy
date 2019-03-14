const { db } = require('../index/index.js');

module.exports = {
  fetchAllMovies: (req, res, next) => {
    db.any("SELECT * FROM movies")
      .then(body => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'Fetched all movies',
          body: body
        })
      })
      .catch(err => console.log(err))
  },

  fetchMovieByGenre: (req, res, next) => {
    db.any("SELECT * FROM movies WHERE genres = ${genre}")
      .then(body => {
        res.status(200)
        .json({
          status: 'Success',
          message: 'Fetched all movies',
          body: body
        })
      })
      .catch(err => console.log(err))
  },

  fetchMovieById: (req, res, next) => {
    const id = req.params.id;
    db.one("SELECT * FROM movies WHERE id = ${id}")
      .then(body => {
        res.status(200)
        .json({
          status:'Success',
          message: 'Fetched movie',
          body: body
        })
      })
      .catch(err => console.log(err))
  },

  fetchMoviesByTotalAvg: (req, res, next) => {
    db.any("SELECT movies.id, name, title, img_url AS genre, AVG(ratings.stars) AS avg_stars" +
    "FROM movies JOIN genre ON movies.genre.id = genre.id JOIN ratings ON movies.id = ratings.movies_id" +
    "GROUP BY movies.id, title, img_url, genre")
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Fetched average movie ratings',
        body: body
      })
    })
    .catch(err => console.log(err))
  }

}
