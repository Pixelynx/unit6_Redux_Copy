const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/unit6');

module.exports = { db };
