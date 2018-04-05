const dotenv = require('dotenv');

dotenv.config();

let db_config = {
  client: "pg",
  connection: {
    host: process.env["DB_HOSTNAME"],
    user: process.env["DB_USERNAME"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_DATABASE"]
  }
};

module.exports = {
  production: db_config,
  development: db_config,
  test: {
    client: 'sqlite3',
    connection: {
      filename: "./test.db"
    }
  },
}
