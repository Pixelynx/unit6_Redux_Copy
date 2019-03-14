DROP DATABASE IF EXISTS unit6;
CREATE DATABASE unit6;

\c unit6;

CREATE TABLE genres(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT REFERENCES genres(id) NOT NULL,
  img_url VARCHAR
);

CREATE TABLE ratings(
  id SERIAL PRIMARY KEY,
  stars INTEGER,
  movie_id INT REFERENCES movies(id)
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  movie_id INT REFERENCES movies(id)
);

INSERT INTO genres (name) VALUES
  ('Comedy'), ('Action'), ('Adventure'), ('Fantasy'), ('Romance');

INSERT INTO movies (title, genre_id, img_url) VALUES
  ('Black Panther', 2, 'https://bit.ly/2AssAmQ'),
  ('Fifty Shades Freed', 5, 'https://bit.ly/2RtdPtK'),
  ('Spider-Man: Into the Spider-Verse', 2, 'https://bit.ly/2X7ELPH'),
  ('Jurassic World: Fallen Kingdom', 3, 'https://bit.ly/2TTXgEP'),
  ('Dragon Ball Super: Broly', 2, 'https://bit.ly/2GjPxx7'),
  ('The Grinch', 1, 'https://bit.ly/2HunfkO'),
  ('Ralph Breaks the Internet', 3, 'https://bit.ly/2BxCgNo'),
  ('Pacific Rim: Uprising', 2, 'https://bit.ly/2utm6kD'),
  ('Tomb Raider', 4, 'https://bit.ly/2LE5iOw'),
  ('Deadpool 2', 1, 'https://bit.ly/2GRVGRZ');

INSERT INTO ratings (stars, movie_id) VALUES
  (3, 1), (2, 2), (4, 3), (3, 4), (4, 5),
  (3, 6), (3, 7), (2, 8), (3, 9), (4, 10),
  (1, 2), (5, 5), (4, 6), (3, 8), (5, 3),
  (5, 10), (4, 7), (4, 1), (3, 5), (4, 9);

INSERT INTO comments (comment, movie_id) VALUES
  ('It''s impressive that Toriyamas work continues to...', 5),
  ('[Deadpool 2] is foulmouthed and funny, unafraid to...', 10),
  ('This movie gave me so much LIFE. I saw it six...', 1),
  ('It''s not perfect but there is enough...', 9),
  ('The glitchy, hyper-sugared brand of...', 7),
  ('The film works it''s way to [become] a...', 3),
  ('While there are some flashy and engaging moments...', 8),
  ('I am not a big fan of action films, but this film...', 1),
  ('A sequel so awful it needs to be described in detail...', 2),
  ('A paradox that only ends up filling with charisma an...', 6),
  ('In the end Dragon Ball Super: Broly gave me something of...', 5),
  ('Pacific Rim: Uprising challenges the notion of a leading...', 8),
  ('These movies are derivative, often ridiculous, and, in the...', 2),
  ('The Grinch is bright and colorful, but the narrative feels...', 6),
  ('The movie is surprisingly self-aware and has very strong...', 5);
