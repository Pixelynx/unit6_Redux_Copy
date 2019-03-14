const { db } = require('./index.js');

const BP = 1;
const FSF = 2;
const SMITSV = 3;
const JW = 4;
const DBSB = 5;
const grinch = 6;
const RBTI = 7;
const PR = 8;
const TR = 9;
const DP2 = 10;

db.none("INSERT INTO genres (name) " +
"VALUES ('comedy'), ('action'), ('adventure'), ('fantasy'), ('romance')")

  .then(() => {
    db.none("INSERT INTO movies (title, genre_id, img_url)" +
  "VALUES ('Black Panther', 2, 'https://bit.ly/2AssAmQ'), ('Fifty Shades Freed', 5, 'https://bit.ly/2RtdPtK')," +
  "('Spider-Man: Into the Spider-Verse', 2, 'https://bit.ly/2X7ELPH'), ('Jurassic World: Fallen Kingdom', 3, 'https://bit.ly/2TTXgEP')," +
  "('Dragon Ball Super: Broly', 2, 'https://bit.ly/2GjPxx7'), ('The Grinch', 1, 'https://bit.ly/2HunfkO'), ('Ralph Breaks the Internet', 3, 'https://bit.ly/2BxCgNo')," +
  "('Pacific Rim: Uprising', 2, https://bit.ly/2utm6kD), ('Tomb Raider', 4, 'https://bit.ly/2LE5iOw'), ('Deadpool 2', 1, 'https://bit.ly/2GRVGRZ')")

    .then(() => {
      db.none("INSERT INTO ratings (stars, movie_id)" +
    "VALUES (3, 1), (1, 2), (3, 6), (3, 1), (4, 7), (5, 5), (3, 7), (2, 3),"
    + "(4, 3), (2, 8), (4, 6), (4, 1), (3, 5), (3, 8), (3, 9), (3, 4),"
    + "(4, 9), (5, 3), (4, 10), (4, 5)")

      .then(() => {
        db.none("INSERT INTO comments (comment, movie)" +
      "VALUES ('It\'s impressive that Toriyama\'s work continues to gain new fans... It\'s a shame he\'s not willing to take more risks.', DBSB)," +
      "('[Deadpool 2] is foulmouthed and funny, unafraid to be genuine in its emotional engagement while also doling out the violence and viscera with unabashed joy.', DB2)," +
      "('This movie gave me so much LIFE. I saw it six times with a variety of folks.', BP),", +
      "('It\'s not perfect but there is enough entertainment there to justify a matinee ticket price.', TR)," +
      "('The glitchy, hyper-sugared brand of animation is stressful, and it appeals a bit too much to child-like sensibilities. However, that\'s not to say the sequel, RALPH BREAKS THE INTERNET, isn\'t without its creative triumphs', RBTI)," +
      "('The film works its way to [become] a metempsychosic event, bearing the soul of the original Marvel vision and finally taking it to the greatest of heights.', SMITSV)," +
      "('While there are some flashy and engaging moments, those are counterbalanced by storytelling that is largely unoriginal and uninspired.', PR)," +
      "('I am not a big fan of action films, but this film was awesome! It was very entertaining and held my full attention.', BP)," +
      "('A sequel so awful it needs to be described in detail to be believed. Therefore, a spoilereview.', FSF)," +
      "('A paradox that only ends up filling with charisma an ideal Christmas adventure to start the holidays.', grinch)," +
      "('In the end Dragon Ball Super: Broly gave me something of a tiny headache.', DBSB)," +
      "('Pacific Rim: Uprising challenges the notion of a leading black man who must appear culturally blank in order to seem 'safe' for non-black audiences.', PR)," +
      "('These movies are derivative, often ridiculous, and, in the case of Fifty Shades Freed, unquestionably hilarious, but they\'re also the overheated comfort food I crave.,' FSF)", +
      "('The Grinch is bright and colorful, but the narrative feels a bit off from the anti-consumerist message that Dr. Seuss may have originally intended.', grinch)," +
      "('The movie is surprisingly self-aware and has very strong moments of character that can be appreciated, even from a newcomer's perspective.', DBSB)")
    })
  })
})
.catch(err => console.log(err))
