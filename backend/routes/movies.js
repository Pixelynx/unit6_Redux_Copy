const express = require('express');
const queries = require("../database/queries/movies.js")
const router = express();

router.get("/", queries.fetchAllMovies);
router.get("/byGenre", queries.fetchMovieByGenre);
router.get("/:id", queries.fetchMovieById);

module.exports = router;
