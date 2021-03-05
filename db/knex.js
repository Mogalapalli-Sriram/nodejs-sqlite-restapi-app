const knex = require('knex');

const knexConnect = knex({
  client: 'sqlite3',
  connection: {
    filename: 'cwc.sqlite3',
  },
  useNullAsDefault: true,
});

module.exports = knexConnect;
