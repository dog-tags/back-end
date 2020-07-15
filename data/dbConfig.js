const knex = require("knex");

const config = require("../knexfile");

const knexEnv =
  process.env.NODE_ENV === "production" ? "production" : "development";

const db = knex(config[knexEnv]);

module.exports = db;
