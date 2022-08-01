const parse = require("pg-connection-string").parse;
const config = parse(process.env.POSTGRES_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    useNullAsDefault: true,
  },
});
